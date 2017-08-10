import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { IPlayer } from './user.interface';

@Injectable()
export class ApiService {
    private url: string = 'api/getData.php';
    constructor(private _http: Http) { }

    getMessage(): Observable<IPlayer[]> {
        return this._http.get(this.url).map((resp: Response) => <IPlayer[]>resp.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    sendData(data: IPlayer) {

        let headers = new Headers({'Content-Type': 'application/json'})
        let options = new RequestOptions({headers: headers});

        const body = data;
        console.log(body);
        return this._http.put('api/saveData.php', body, options );
    }
}

