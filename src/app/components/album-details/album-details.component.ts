import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor() { }

  @Input() album: any;

  ngOnInit(): void {
  }

}
