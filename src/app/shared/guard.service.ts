import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
    gameOver: boolean = true;

    constructor(private _router: Router){}

    canActivate(): boolean {
        if (this.gameOver) {
            alert("Not today! hacker");
            this._router.navigate(['/welcome']);
            return false;
        } else {
            return true;
        }
    }
}