import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayersService } from './players.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';
import { AddComponent } from './player-manager/add/add.component';
import { ListComponent } from './player-manager/list/list.component';
import { GameOneComponent } from './status-manager/game-one/game-one.component';
import { GameTwoComponent } from './status-manager/game-two/game-two.component';
import { GameThreeComponent } from './status-manager/game-three/game-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerManagerComponent,
    StatusManagerComponent,
    AddComponent,
    ListComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
