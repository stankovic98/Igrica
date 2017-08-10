import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ScoreService } from './../../shared/score.service';
@Component({
    selector: 'app-navbar',
    templateUrl:'./navbar.template.html'
})

export class NavbarComponent implements OnInit{
    nickname: string;
    bodovi: number = 0;
    subscription: Subscription;

    constructor(private _score: ScoreService, private _userData: ScoreService) {

        this.subscription = this._score.getScore().subscribe(score => {
            this.bodovi = score.score;
        });
    }

    ngOnInit() {
        this.nickname = this._userData.nickname;
    }
}