import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITeacher } from './teacher.service';
import { IStudent } from './student.service';

export interface ISubject {
  _id?: string;
  title: string;
  teacher?: ITeacher;
  students?: IStudent[];
  periods?: IPeriod[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISubjectPayload {
  subjects: ISubject[];
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}

export interface IPeriod {
  day: string;
  time: string;
  override: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  // tslint:disable-next-line: variable-name
  _subject = new BehaviorSubject<ISubject>(null);
  subject$ = this._subject.asObservable();
  // tslint:disable-next-line: variable-name
  private _subjects = new BehaviorSubject<ISubjectPayload>(null);
  subjects$ = this._subjects.asObservable();
  // tslint:disable-next-line:variable-name
  private _allSubjects = new BehaviorSubject<ISubject[]>(null);
  allSubjects$ = this._allSubjects.asObservable();

  constructor(private http: HttpClient) {
    this.loadSubjects();
    // this.loadAllSubjects();
  }

  loadSubjects() {
    this.getByPage().subscribe();
  }

  loadAllSubjects() {
    this.getSubjects().subscribe(d => {
      this._allSubjects.next(d);
    });
  }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>('/api/subjects');
  }

  getByPage(page = 1, limit = 15, search = ''): Observable<ISubjectPayload> {
    return this.http
      .get<ISubjectPayload>(
        `/api/subjects?page=${page}&limit=${limit}&search=${search}`
      )
      .pipe(
        map(res => {
          this._subjects.next(res);
          return res;
        })
      );
  }

  createNewSubject(FormData: ISubject) {
    return this.http
      .post('/api/subjects', FormData, { observe: 'response' })
      .pipe(
        tap(_ => {
          this.loadSubjects();
        })
      );
  }

  addPeriod(subjectId: string, periods: IPeriod[]): Observable<IPeriod[]> {
    return this.http
      .post<IPeriod[]>(`/api/subjects/${subjectId}/periods`, periods)
      .pipe(
        map(d => {
          this.getSubject(subjectId).subscribe();
          return d;
        })
      );
  }

  getPeriods(id: string): Observable<IPeriod[]> {
    return this.http.get<IPeriod[]>('/api/subjects/' + id + '/periods').pipe(
      map(d => {
        this.getSubject(id).subscribe();
        return d;
      })
    );
  }

  assignTeacher(id: string, periodData): Observable<ISubject> {
    return this.http
      .patch<ISubject>('/api/subjects/' + id + '/assign-teacher', periodData)
      .pipe(
        map(d => {
          this.getSubject(id).subscribe();
          return d;
        })
      );
  }


  getSubject(id: string): Observable<ISubject> {
    return this.http.get<ISubject>(`/api/subjects/${id}`).pipe(
      map(d => {
        this._subject.next(d);
        return d;
      })
    );
  }
}
