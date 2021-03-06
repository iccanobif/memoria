import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponentComponent as MainComponent } from './main-component/main.component';
import { AddWordsComponent } from './add-words/add-words.component';
import { GrammarComponent } from './grammar/grammar.component';

@Injectable({
  providedIn: 'root',
})
export class MainResolver implements Resolve<string[]>
{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string[]> {
    return fetch("api/word").then(res => res.json())
  }

}

const appRoutes: Routes = [
  { path: 'add-words', component: AddWordsComponent },
  { path: 'game', component: MainComponent, resolve: { words: MainResolver } },
  { path: "grammar", component: GrammarComponent },
  { path: '**', redirectTo: '/game' },
];



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddWordsComponent,
    GrammarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
