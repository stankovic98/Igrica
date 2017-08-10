import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { ApiService } from './../shared/server.observable';
import { IPlayer } from './../shared/user.interface';
import { ScoreService } from './../shared/score.service';

@Component({
    templateUrl: './endscreen.html',
    styleUrls: ['./endscreen.style.css']
})
export class Endscreen implements OnInit, OnDestroy {
    nickname: string;
    score: number;
    highscores: IPlayer[];
    newUser: IPlayer = {
        id: 100,
        nickname: this._score.nickname,
        score: this._score.score
    }

    constructor(private _http: ApiService, private _score: ScoreService, private _router: Router) { }

    ngOnInit() {
        this._http.getMessage().subscribe(msg => {
            this.highscores = msg;
        }, (err) => {  },
            () => {
                console.log("send data");
                this.highscores.push(this.newUser);
                this.highscores.sort((a, b) => {
                    if (a.score > b.score)
                        return -1;
                    if (a.score < b.score)
                        return 1;
                    return 0;
                });
                console.log("send data");
                this._http.sendData(this.newUser).subscribe();
                console.log("send data");
                //PHP skripta bude vratila prvih 5 + mi dodajemo newUser, a zelimo prikazati prvih 5
                this.highscores.pop()
            });
    }

    ngOnDestroy() {
        //this._http.sendData(this.newUser);
    }

    changeNickname() {
        this._score.score = 0;
        this._router.navigate(['/welcome']);
    }
    restart() {
        this._score.score = 0;
        this._router.navigate(['/game/' + this.nickname]);
    }
}