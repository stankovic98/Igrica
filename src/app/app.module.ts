import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameModule } from './game.module';
import { ScoreService } from './game/shared/score.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GameModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },    
      { path: '', component: WelcomeComponent},
      { path: '**', component: WelcomeComponent }

    ]),
    
  ],
  providers: [ ScoreService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
