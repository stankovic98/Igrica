import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { NavbarComponent } from './game/navbar/navbar.component';
import { ItemComponent } from './game/item/item.component';
import { ExploreRendererDirective } from './game/explore-renderer-directive.component';

@NgModule({
    declarations: [
        GameComponent,
        NavbarComponent,
        ItemComponent,
        ExploreRendererDirective
    ],
    imports: [
        RouterModule.forChild([
            { path: 'game/:nickname', component: GameComponent}
        ])
    ],
   // bootstrap: [ GameComponent ],
    entryComponents: [ItemComponent]
    
})

export class GameModule { }