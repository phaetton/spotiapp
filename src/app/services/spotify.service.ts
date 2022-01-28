import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Iniciando servicio de spotify");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBlvID4868Hn67rR3oAGHgTd311uDT-pBhPuoRBmFk0Vizc0rHjOMfN3AvMaFjbz4DLtHgGAATfqDxrZ6I?limit=20'
    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .pipe(map((data: any) => {
        return data['albums'].items
      }));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBlvID4868Hn67rR3oAGHgTd311uDT-pBhPuoRBmFk0Vizc0rHjOMfN3AvMaFjbz4DLtHgGAATfqDxrZ6I?limit=20'
    })

    //reduciendo codigo
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map((data: any) => data.artists.items))
  }
}
