import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    //get access token for authentication
    this.authService.getAccessToken().subscribe((res: any) => {
      this.accessToken = res['access_token'];

      //get album list with the returned access Token
      this.albumServics.getAlbums(this.accessToken).subscribe((response: any) => {        
        const {items} = response;
        this.albums = items;
        
        //set drop down value to cookie or to the first item
        // console.log("get cookie");
        // var cookieSelection = this._cookieService.get("this.selectedOption")
        // console.log(cookieSelection);
        // console.log(cookieSelection[0]);
        // this.selectedAlbum = this._cookieService.get("this.selectedOption") ? cookieSelection : items[0];
        this.selectedAlbum = items[0];

      });
    });
  }

}
