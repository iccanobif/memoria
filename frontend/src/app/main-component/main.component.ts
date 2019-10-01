import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponentComponent implements OnInit {
  
  playing: boolean = false
  gameOver: boolean = false
  solutionRevealed: boolean = false
  solution: string[] = [""]

  itemList: string[]
  currentIndex: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // this.route.data.subscribe((data: { words: string[] }) => {
    //   this.itemList = data.words
    // })
  }

  go() {
    this.itemList = this.route.snapshot.data.words.map((x: any) => x);
    this.playing = true
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
          this.solution = ["N/A"]
        else
          this.solution = json.japaneseDefinitions
            .map((x: { kanjiElements: { join: (arg0: string) => string; }; readingElements: { join: (arg0: string) => string; }; glosses: { join: (arg0: string) => string; }; }) => x.kanjiElements.join("/") + " (" + x.readingElements.join("/")
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
    this.solution = []
  }

  ko() {
    this.currentIndex++
    if (this.currentIndex >= this.itemList.length
      || this.currentIndex >= 10)
      this.currentIndex = 0
    this.solutionRevealed = false;
    this.solution = []
  }

  delete() {
    fetch("api/word/" + this.itemList[this.currentIndex], {
      method: "DELETE"
    })
      .then(() => this.ok())
      .catch(alert)
  }
}
