import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor(private http:HttpClient) { }

  //Return spotify albums list for speceic artist
  //get parameter token for authentication
  getAlbums(token: string)  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });

    return this.http.get(`https://api.spotify.com/v1/artists/${environment.artistId}/albums`, {
        headers: headers});
  }

}

