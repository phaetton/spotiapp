import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Iniciando servicio de spotify");
  }

  getNewReleases() {
const headers= new HttpHeaders({
  'Authorization':'Bearer BQDnb0-e6IlCorfGiRSaEMpAcZrVFFoGnUWxTy5UQWYrrwP8uDGIaVKZvPztUnhiSn_mA1-iuzklIDMN_Ps?limit=20'
})

    this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
      .subscribe(data => {
        console.log(data);
      })
  }
}
