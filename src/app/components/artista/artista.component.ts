import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any={};

  loadingArtist:boolean;

  constructor(private router: ActivatedRoute, private spotifySvc: SpotifyService) {
    this.loadingArtist=true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotifySvc.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.loadingArtist=false;
      })
  }

  ngOnInit(): void {
  }

}
