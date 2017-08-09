import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { IPlayer } from './user.interface';

@Injectable()
export class ApiService {
    private url: string = 'api/test.json';
     constructor(private _http: Http) {}

    getMessage(): Observable<IPlayer[]> {
        return this._http.get(this.url).map((resp: Response) => <IPlayer[]>resp.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}

