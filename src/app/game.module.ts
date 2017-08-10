import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game/game.component';
import { NavbarComponent } from './game/navbar/navbar.component';
import { ItemComponent } from './game/item/item.component';
import { Endscreen } from './endscreen/endscreen.component';
import { GuardService } from './shared/guard.service';


@NgModule({
    declarations: [
        GameComponent,
        NavbarComponent,
        ItemComponent,
        Endscreen
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'game/:nickname', component: GameComponent},
            { path: 'highscore', 
             canActivate: [GuardService],
             component: Endscreen}
        ])
    ],
   // bootstrap: [ GameComponent ],
    entryComponents: [ItemComponent],
    
    
})

export class GameModule { }