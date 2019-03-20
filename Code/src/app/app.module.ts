import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store"

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { rootReducer,effects } from './store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseService } from './services/database.service';
import { AppRoutingModule } from './/app-routing.module';
import { ChakraComponent } from './components/chakra/chakra.component';
import { ChakraListComponent } from './components/chakra-list/chakra-list.component';
import { CharacterComponent } from './components/character/character.component';
import { InGameComponent } from './components/in-game/in-game.component';
import { TurnTimerComponent } from './components/turn-timer/turn-timer.component';
import { CharacterInGameMineComponent } from './components/character-in-game-mine/character-in-game-mine.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharcterInGameAiComponent } from './components/charcter-in-game-ai/charcter-in-game-ai.component';
import { TeamMyIngameComponent } from './components/team-my-ingame/team-my-ingame.component';
import { TeamAiIngameComponent } from './components/team-ai-ingame/team-ai-ingame.component';
import { CharacterSelectionComponent } from './components/character-selection/character-selection.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ChosenCharactersComponent } from './components/chosen-characters/chosen-characters.component';
import { SkillComponent } from './components/skill/skill.component';
import { DoMoveService } from './services/do.move.service';
import { AiMoveService } from './services/ai.move.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ChakraComponent,
    ChakraListComponent,
    CharacterComponent,
    InGameComponent,
    TurnTimerComponent,
    CharacterInGameMineComponent,
    HomePageComponent,
    CharcterInGameAiComponent,
    TeamMyIngameComponent,
    TeamAiIngameComponent,
    CharacterSelectionComponent,
    MyProfileComponent,
    ChosenCharactersComponent,
    SkillComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(effects),
    AppRoutingModule
  ],
  providers: [MovieService,DatabaseService,DoMoveService,AiMoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
