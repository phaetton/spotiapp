import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: any;

  constructor(private spotifySvc: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotifySvc.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
        (err) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = err.error.error.message;

        });
  }

  ngOnInit(): void {
  }

}
