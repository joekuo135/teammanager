import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PlayersService {

  constructor(private _http: Http) { }

  retrieveAllPlayers() {
    return this._http.get('/api/players')
      .map(response => response.json())
      .toPromise();
  }

  createPlayer(newPlayerData) {
    console.log('**** hit service createPlayer');
    console.log(newPlayerData);
    return this._http.post('/api/players/create', newPlayerData)
      .map(response => response.json()).toPromise();
  }

  removePlayerById(playerId) {
    console.log('**** hit service removeplayerById:');
    console.log(playerId);
    return this._http.post('/api/players/remove', playerId)
      .map(response => response.json()).toPromise();
  }

  setGame1StatusByPlayer(order) {
    console.log('**** hit service setGame1StatusByPlayer');
    console.log(order);
    return this._http.post('/api/players/game/1/update', order)
      .map(response => response.json()).toPromise();
  }

  setGame2StatusByPlayer(order) {
    console.log('**** hit service setGame2StatusByPlayer');
    console.log(order);
    return this._http.post('/api/players/game/2/update', order)
      .map(response => response.json()).toPromise();
  }
  setGame3StatusByPlayer(order) {
    console.log('**** hit service setGame3StatusByPlayer');
    console.log(order);
    return this._http.post('/api/players/game/3/update', order)
      .map(response => response.json()).toPromise();
  }

}
