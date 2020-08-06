import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
  selectedAlbum: any = {};
  albums = [];
  errorMsg ='';

  constructor(private albumServics: AlbumService, private authService: AuthenticationService,
    private _cookieService: CookieService) { }

  onChange(selected: object) {
    this.selectedAlbum = selected;
  }

  ngOnInit(): void {
    let accessToken = '';
    //get access token for authentication
    this.authService.getAccessToken().subscribe((res: any) => {
      accessToken = res['access_token'];

      //get album list with the returned access Token
      this.albumServics.getAlbums(accessToken).subscribe((response: any) => {
        const { items } = response;
        this.albums = items;
        this.selectedAlbum = items[0];

        //Set drop down value from cookie
        const selectedId = this._cookieService.get("selectedOption");

        if (selectedId) {
          this.albums.forEach(album => {
            if (album.id === selectedId) {
              this.selectedAlbum = album;
            }
          });
        }
      },
      (error) => {this.errorMsg = 'Error get album: ' +  error.message; }
      );
    },
    (error) => {this.errorMsg = 'Error get access token: ' +  error.message;}
    );
  }

}
