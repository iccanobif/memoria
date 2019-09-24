import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rawInput: string
  playing: boolean = false
  gameOver: boolean = false
  solutionRevealed: boolean = false
  solution: string = ""

  itemList: string[]
  currentIndex: number

  ngOnInit() {
    fetch("api/word-list")
      .then(res => {
        res.text()
          .then(text => {
            this.rawInput = text
          })
          .catch(alert)
      })
      .catch(err => {
        alert(err)
      })
  }

  go() {
    fetch("api/word-list", {
      method: "POST",
      body: this.rawInput
    })
    .then(() => {})
    .catch(alert)

    this.playing = true
    this.itemList = this.rawInput
      .split("\n")
      .map(x => x.trim())
      .filter(x => x != "")
    this.currentIndex = 0
  }

  revealSolution() {
    this.solutionRevealed = true;
    fetch("http://www.iccan.us/knaji_api/dictionary/" + this.itemList[this.currentIndex])
      .then(res => {
        return res.json()
      })
      .then(json => {
        if (json.japaneseDefinitions.length == 0)
          this.solution = "N/A"
        else
          this.solution = json.japaneseDefinitions
            .map(x => x.kanjiElements.join("/") + " (" + x.readingElements.join("/")
              + "): "
              + x.glosses.join(" / "))
      })
      .catch((err) => {
        this.solution = err
      })
  }

  ok() {
    this.itemList.splice(this.currentIndex, 1);
    if (this.currentIndex >= this.itemList.length)
      this.currentIndex = 0
    if (this.itemList.length == 0) {
      this.playing = false
      this.gameOver = true
    }
    this.solutionRevealed = false;
    this.solution = ""
  }

  ko() {
    this.currentIndex++
    if (this.currentIndex >= this.itemList.length
      || this.currentIndex >= 10)
      this.currentIndex = 0
    this.solutionRevealed = false;
    this.solution = ""
  }
}
