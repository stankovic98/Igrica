import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/server.observable'

import { IPlayer } from './../shared/user.interface';

@Component({
    templateUrl: './endscreen.html'
})
export class Endscreen implements OnInit {
    msg: string = "hello";
    highscores: IPlayer[];

    constructor(private _http: ApiService){}

    ngOnInit() {
        this._http.getMessage().subscribe(msg => {
            this.highscores = msg;
        }, (err) => { console.log(err) })
    }
}