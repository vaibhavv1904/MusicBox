import { Component, OnInit } from '@angular/core';
import {content} from '../constants';
import { Router, ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  contentId:number;
  allContent = content;
  currContent:any;
  ngOnInit(): void {
    this.contentId = this.route.snapshot.params['id'];
    this.currContent = this.allContent[this.contentId];
  }

}
