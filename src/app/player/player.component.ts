import { Component, OnInit, Inject } from '@angular/core';
import {content} from '../constants';
import { ActivatedRoute, } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) document,
    private snackBar: MatSnackBar
  ) { }
  contentId:number;
  allContent = content;
  currContent:any;
  song:HTMLAudioElement;
  isplaying:boolean = false;
  maxtime:number = 0;
  elapsedtime:number = 0;
  interval:any;
  lengthPlayed:number = 0;
  ngOnInit(): void {
    this.lengthPlayed = 0;
    this.contentId = this.route.snapshot.params['id'];
    this.currContent = this.allContent[this.contentId];
    this.song = <HTMLAudioElement> document.getElementById('music');
    this.interval = setInterval(() => {this.timeCheck();},600);
    this.snackBar.open('please press the play button repeatedly', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: 'snack-bar'
    });
  }
  play()
  {
    this.lengthPlayed = (this.song.currentTime/this.song.duration)*100;
    if(!this.isplaying)
    {
        this.song.play();
       this.isplaying = true;
    }
    this.maxtime++;
  }
  refresh() {
    this.song.load();
    this.isplaying = false;
    this.maxtime = 0;
    this.elapsedtime = 0;
    this.lengthPlayed = 0;
  }
  timeCheck()
  {
      if(this.isplaying)
      {
          this.elapsedtime++;
          if(this.elapsedtime == this.maxtime)
          {
              this.isplaying = false;
              this.song.pause();
          }
      }
      else if(this.elapsedtime < this.maxtime && !this.isplaying)
      {
          this.isplaying = true;
          this.song.play();
      }
    }
  }
