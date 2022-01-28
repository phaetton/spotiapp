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
  topTracks:any[]=[];

  loadingArtist:boolean;

  constructor(private router: ActivatedRoute, private spotifySvc: SpotifyService) {
    this.loadingArtist=true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']),
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotifySvc.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.loadingArtist=false;
      })
  }

  getTopTracks(id:string){
    this.spotifySvc.getTopTracks(id)
    .subscribe(data=>{
      console.log("datos:",data);
      
      this.topTracks=data;
      this.loadingArtist=false
    })
  }

  ngOnInit(): void {
  }

}
