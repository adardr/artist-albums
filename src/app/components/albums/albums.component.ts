import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {
  selectedAlbum: any = {};
  albums = [];
  accessToken ='';

  constructor(private albumServics: AlbumService, private authService:AuthenticationService, 
              private _cookieService: CookieService) { }

  onChange(selected: object){    
    this.selectedAlbum = selected;
  }

  ngOnInit(): void {
    //get access token for authentication
    this.authService.getAccessToken().subscribe((res: any) => {
      this.accessToken = res['access_token'];

      //get album list with the returned access Token
      this.albumServics.getAlbums(this.accessToken).subscribe((response: any) => {        
        const {items} = response;
        this.albums = items;
        this.selectedAlbum = items[0];
        
        //set drop down value to cookie or to the first item
        const selectedId = this._cookieService.get("selectedOption");
        console.log('selectedId: ' + selectedId);
        
        if(selectedId){
          this.albums.forEach(album => {
            console.log('album.id: ' + album.id);

            if(album.id === selectedId){
              this.selectedAlbum = album;
            }
          });
        }
      });
    });
  }

}
