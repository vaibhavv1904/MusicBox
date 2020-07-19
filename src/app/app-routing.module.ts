import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ContentListComponent} from './content-list/content-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PlayerComponent} from './player/player.component';
import {Player2Component} from './player2/player2.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'content-list/:id', component: ContentListComponent},
  {path:'player/:id',component:PlayerComponent},
  {path:'player2/:id',component:Player2Component},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
