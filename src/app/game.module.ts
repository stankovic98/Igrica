import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { NavbarComponent } from './game/navbar/navbar.component';

@NgModule({
    declarations: [
        GameComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'game/:nickname', component: GameComponent}
        ])
    ],
    exports: [
        GameComponent
    ],
    
})

export class GameModule { }