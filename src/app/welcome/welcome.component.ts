import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScoreService } from './../shared/score.service';

@Component({
    templateUrl: './welcome.template.html',
    styleUrls: ['welcome.css']
})
export class WelcomeComponent {
    nickname: string = '';


    constructor(private _router: Router, private _userData: ScoreService) { }



    onClick(): void {

        if (this.nickname == '') {
            alert('You need to enter nickname');
            return;
        } else {
            this._userData.nickname = this.nickname;
            this._router.navigate(['/game/' + this.nickname]);
        }
    }
}