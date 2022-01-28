import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;

  constructor(private spotiappSvc: SpotifyService) {
    this.loading=false;
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.spotiappSvc.getArtistas(termino)
      .subscribe((data: any) => {
        // this.artistas = data.artists.items;
        this.artistas = data;
       this.loading = false;
      })
  }

}
