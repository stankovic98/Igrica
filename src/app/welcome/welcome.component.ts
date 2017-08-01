import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './welcome.template.html',
    styleUrls: ['welcome.css']
})
export class WelcomeComponent {
    nickname: string = '';
    
    constructor(private _router: Router){}

    onClick(): void {
        if (this.nickname == ''){
            alert('You need to enter nickname');
            return;
        }

        this._router.navigate(['/game']);
    }

}