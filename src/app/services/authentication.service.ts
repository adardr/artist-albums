import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  get headers(){
    return new HttpHeaders({'Authorization': 'Basic ZTIwNzczMTNiOTUwNDg5ZDliNmJlODRhZWUyZGVhNTU6NTA1Njg0NjY1MzljNGQ2ZDhkOGE4YjRhM2Y2MWMwMjk=',
                            'Content-Type':'application/x-www-form-urlencoded'});
  }
  
  getAccessToken(){
      let body = new URLSearchParams();
      body.set('grant_type', 'client_credentials');

      return this.http.post(`https://accounts.spotify.com/api/token`,
        body.toString(),
        {headers: this.headers});   
  }
}

