import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreService } from './../shared/score.service';
@Component({
    selector: 'appitem',
    template: `
    <style>
        div {
            position: absolute;
        }
    </style>
    <div [ngStyle]="setStyle()" *ngIf='show' (click)='increseScoreAndHide()' ></div>`,
})
export class ItemComponent implements OnInit {
    ran: number;

    WIDTH: number = window.innerWidth;
    HEIGHT: number = window.innerHeight;
    sizeX: string = this.getRandom(this.WIDTH / 4) + "px";
    sizeY: string = this.getRandom(this.HEIGHT / 4) + "px";
    posX: string = this.getRandom(this.WIDTH - 20) + "px";
    posY: string = this.getRandom(this.HEIGHT - 50) + 40 + "px";
    color: string = this.getRandomColor();
    show: boolean = true;
    style: any = [];
    shape: number = this.getRandom(3);

    constructor(private _score: ScoreService) {

    }
    bodovi: number = 0;

    ngOnInit() {
        setTimeout(() => { this.show = false }, 2000);
    }

    setStyle() {
        switch (this.shape) {
            case 0:
                console.log('case 1');
                this.style = {
                    "width": this.sizeX,
                    "height": this.sizeY,
                    "left": this.posX,
                    "top": this.posY,
                    "background-color": this.color,
                }
                break;
            case 1:
                console.log('case 2');
                this.style = {
                    "width": this.sizeX,
                    "height": this.sizeX,
                    "left": this.posX,
                    "top": this.posY,
                    "background-color": this.color,
                    "border-radius": "50%"
                }
                break;
            case 2:
                console.log('case 3');
                this.style = {
                    "width": this.sizeX,
                    "height": this.sizeX,
                    "left": this.posX,
                    "top": this.posY,
                    "background-color": this.color,
                }
                break;
        }
        return this.style;
    }

    getRandom(max: number): number {
        this.ran = Math.floor(Math.random() * max);
        if (max < 5) return this.ran;
        if (this.ran > 30)
            return this.ran;
        else
            return this.ran + 15;
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    increseScoreAndHide() {
        this.show = false;

        this._score.score++;
        this._score.setScore(this._score.score);
    }
}