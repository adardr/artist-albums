import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  accessToken: any;
  constructor(private http:HttpClient, private authService:AuthenticationService) { }

  //Return spotify albums list of speceic artist
  getAlbums(token: string)  {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });

      return this.http.get(`https://api.spotify.com/v1/artists/${environment.artistId}/albums`, {
        headers: headers});
  }

}

