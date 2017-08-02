import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'appitem',
    template: '<div></div>',
    styles: ['div {width:100px; height: 200px; background-color: green;} ']
})
export class ItemComponent implements OnInit{
    constructor(){
    
  }
    bodovi: number = 0;

    ngOnInit() {

    }
}