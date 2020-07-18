import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import {animeList,fantasyList,harmonyList} from '../constants';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {}
  allcontentList = [animeList,fantasyList,harmonyList];
  currentList:any;
  contentId:number;
  playerId:number;
  ngOnInit(): void {
    this.contentId = this.route.snapshot.params['id'];
    this.currentList = this.allcontentList[this.contentId];
    // console.log(this.currentList);
  }
  nav(id:number) {
    if(this.contentId == 0) {
      this.playerId = id;
    } else if(this.contentId == 1) {
      this.playerId = 6+id;
    } else {
      this.playerId = 12+id;
    }
    this.router.navigate(['/player/'+this.playerId]);
  }

}
