import { Component } from '@angular/core';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent {

  rawInput: string

  save() {
    fetch("api/word", {
      method: "POST",
      body: this.rawInput
    })
      .then(() => alert("done"))
      .catch(alert)
  }
}
