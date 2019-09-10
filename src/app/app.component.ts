import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rawInput: string
  playing: boolean = false
  gameOver: boolean = false

  itemList: string[]
  currentIndex: number

  go() {
    this.playing = true
    this.itemList = this.rawInput
                        .split("\n")
                        .map(x => x.trim())
                        .filter(x => x != "")
    this.currentIndex = 0
  }

  ok() {
    this.itemList.splice(this.currentIndex, 1);
    if (this.currentIndex >= this.itemList.length)
      this.currentIndex = 0
    if (this.itemList.length == 0) {
      this.playing = false
      this.gameOver = true
    }
  }

  ko() {
    this.currentIndex++
    if (this.currentIndex >= this.itemList.length
      || this.currentIndex >= 10)
      this.currentIndex = 0
  }
}
