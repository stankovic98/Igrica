import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/server.observable'

import { IPlayer } from './../shared/user.interface';
import { ScoreService } from './../shared/score.service';

@Component({
    templateUrl: './endscreen.html',
    styleUrls: ['./endscreen.style.css']
})
export class Endscreen implements OnInit {
    msg: string = "hello";
    nickname: string;
    score: number;
    highscores: IPlayer[];

    constructor(private _http: ApiService, private _score: ScoreService){}

    ngOnInit() {
        this._http.getMessage().subscribe(msg => {
            this.highscores = msg;
        }, (err) => { console.log(err) });
        this.score = this._score.score;
        this.nickname = this._score.nickname;
        console.log(this.nickname);
    }
}