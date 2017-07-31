import { Component} from '@angular/core';

@Component({
    selector: 'ng-welcome',
    templateUrl: './welcome.template.html',
    styleUrls: ['welcome.css']
})
export class Welcome {
    pageTitle: string = 'Game';
}