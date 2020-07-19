import { Component, OnInit, Inject } from '@angular/core';
import {content} from '../constants';
import { ActivatedRoute, } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) document,
  ) { }
  contentId:number;
  allContent = content;
  currContent:any;
  song:HTMLAudioElement;
  isplaying:boolean = false;
  interval:any;
  lengthPlayed:number = 0;

  ngOnInit(): void {
    this.contentId = this.route.snapshot.params['id'];
    this.currContent = this.allContent[this.contentId];
    this.song = <HTMLAudioElement> document.getElementById('music');
    this.interval = setInterval(() => {this.timeCheck();},100);
  }

  play()
  {
    if(!this.isplaying) {
      this.song.play();
      this.isplaying = true;
    } else {
      this.song.pause();
      this.isplaying = false;
    }
  }

  refresh() {
    this.song.load();
    this.isplaying = false;
  }

  timeCheck() {
    this.lengthPlayed = (this.song.currentTime/this.song.duration)*100;
  }

}
