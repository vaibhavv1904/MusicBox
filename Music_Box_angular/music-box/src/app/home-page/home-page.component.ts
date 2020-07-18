import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router
  ) {}
  title = 'music-box';
  isliked1:boolean = true;
  isliked2:boolean = true;
  isliked3:boolean = true;
  ngOnInit(): void {
  }
  change(id:number) {
    if(id == 1) {
      this.isliked1 = !this.isliked1;
    } else if(id == 2) {
      this.isliked2 = !this.isliked2;
    } else {
      this.isliked3 = !this.isliked3;
    }
  }
  nav(id:number) {
    this.router.navigate(['/content-list/'+id]);
  }

}
