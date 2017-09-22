import { PlayersService } from './../../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  playerList = [];
  constructor(private _playersService: PlayersService) {
    this.getAllPlayers();
   }

  getAllPlayers() {
    this._playersService.retrieveAllPlayers()
      .then((response) => {
        console.log('***** hitgame1 gotAllPlayers');
        this.playerList = response;
        console.log(this.playerList);
      })
      .catch((errors) => {
        console.log('errors catch');
        console.log(errors);
      });
  }

  updateGame1Status(status, player) {
    console.log('***** hit updateGame1Status');
    console.log(status);
    console.log(player);
    const changeStatusOrder = {status : status, playerId : player};
    this._playersService.setGame1StatusByPlayer(changeStatusOrder)
      .then(() => {
        console.log('***** hit getting another list');
        this.getAllPlayers();
      });
  }

  ngOnInit() {
  }

}
