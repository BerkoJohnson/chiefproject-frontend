import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ISubject } from './subject.service';

export interface ISummary {
  count: number;
  studentsRegistered: IStudent[];
  subjects: ISubject[];
  lessons: [{
    day: string;
    subject: string;
    time: string;
    status: string;
    students: IStudent[];
  }];
}

export interface IRegs {
  _id: string;
  name: string;
  numberOfSubjects: number;
}

export interface IRegistrationSummary {
  _id: string;
  title: string;
  noOfStudents: number;
  students: [{
    _id: string;
    name: string;
  }];
}

export interface INewStudent {
  name: string;
  tel: string | string[];
  guardian: string;
  guardian_tel: string | string[];
  date_registered: Date;
}

export interface IStudent {
  _id?: string;
  name: string;
  contacts: string[];
  guardian: {
    name: string;
    contacts: string[];
  };
  photo?: File;
  date_registered: Date;
  createdAt?: Date;
  updatedAt?: Date;
  registrations?: IRegistrationPayload[];
  payments?: Payment[];
}

export interface ListPayload {
  students: IStudent[];
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}


export interface Payment {
  _id?: string;
  date: Date;
  amount: number;
  numberOfSubjects: number;
  typeOfPayment: 'Part' | 'Full';
  month: string | string[];
}

export interface IRegistration {
  studentID: string;
  // tslint:disable-next-line:max-line-length
  month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
  subjects: string[];
}

export interface IRegistrationPayload {
  _id?: string;
  student?: IStudent;
  // tslint:disable-next-line:max-line-length
  month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
  subjects: ISubject[];
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // tslint:disable-next-line:variable-name
  _student = new BehaviorSubject<IStudent>(null);
  student$ = this._student.asObservable();
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  // tslint:disable-next-line: variable-name
  private _students = new BehaviorSubject<ListPayload>(null);
  students$ = this._students.asObservable();
  // tslint:disable-next-line:variable-name
  private _summary = new BehaviorSubject<ISummary>(null);
  summary$ = this._summary.asObservable();

  constructor(private http: HttpClient) {
    this.loadStudents();
  }

  get thisMonth() {
    const m = new Date().getMonth();
    return this.months[m];
  }

  loadStudents() {
    this.getByPage().subscribe();
  }

  loadSummary() {
    this.summary().subscribe();
  }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('/api/students');
  }

  getByPage(page = 1, limit = 15, search = ''): Observable<ListPayload> {
    return this.http
      .get<ListPayload>(`/api/students?page=${page}&limit=${limit}&search=${search}`)
      .pipe(
        map(res => {
          this._students.next(res);
          return res;
        })
      );
  }

  createNewStudent(formData: IStudent) {
    return this.http
      .post('/api/students', formData, { observe: 'response' })
      .pipe(
        tap(_ => {
          this.loadStudents();
          this.loadSummary();
        })
      );
  }

  uploadImage(formData: FormData, id: string): any {
    return this.http.post<any>(`/api/students/${id}`, formData, { observe: 'events', reportProgress: true }).pipe(
      map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total);
            return { status: 'progress', message: progress };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      }));
  }

  register(formData: IRegistration): Observable<IStudent> {
    return this.http.post<IStudent>('/api/students/register-subjects', formData).pipe(
      map(d => {
        if (d) {
          // this._student.next(d);
          this.summary().subscribe();
        }
        return d;
      })
    );
  }

  getStudent(id: string): Observable<IStudent> {
    return this.http.get<IStudent>(`/api/students/${id}`).pipe(
      map(d => {
        this._student.next(d);
        return d;
      })
    );
  }


  summary(): Observable<ISummary> {
    return this.http.get<ISummary>(`/api/students/summary`).pipe(
      map(d => {
        if (d) {
          this._summary.next(d);
          return d;
        }
      })
    );
  }

  getRegistrationsForMonth(month: string): Observable<IRegs[]> {
    const thisMonth = month || this.thisMonth;
    return this.http.get<IRegs[]>(`/api/students/registered-subjects?month=${thisMonth}`);
  }
}
