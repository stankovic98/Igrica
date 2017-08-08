import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game/game.component';
import { NavbarComponent } from './game/navbar/navbar.component';
import { ItemComponent } from './game/item/item.component';


@NgModule({
    declarations: [
        GameComponent,
        NavbarComponent,
        ItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'game/:nickname', component: GameComponent}
        ])
    ],
   // bootstrap: [ GameComponent ],
    entryComponents: [ItemComponent]
    
})

export class GameModule { }