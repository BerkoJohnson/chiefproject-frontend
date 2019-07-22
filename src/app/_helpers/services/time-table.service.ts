import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  constructor(private http: HttpClient) {

  }
}
