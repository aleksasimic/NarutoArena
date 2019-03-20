import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharacterSelectionComponent } from './components/character-selection/character-selection.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { InGameComponent } from './components/in-game/in-game.component';

//path je ono posle localhost
//component je komponenta koja se pokazuje
//card/:id

const routes:Routes=[
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
  ,
  //dosao sam do characterselectmodula
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"characterselection",
    component:CharacterSelectionComponent
  },
  {
    path:"ingame",
    component:InGameComponent
  }


]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
