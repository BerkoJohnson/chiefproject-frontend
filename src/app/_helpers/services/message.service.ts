import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IMessage {
    type: 'success' | 'error' | 'system' | 'info' | 'warning';
    text: string | string[];
}

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    // tslint:disable-next-line:variable-name
    _message = new BehaviorSubject<IMessage>(null);
    message$ = this._message.asObservable();
    constructor() {  }
}
