import { Component } from '@angular/core';

@Component({
  selector: 'app-scrooling',
  templateUrl: './scrooling.component.html',
  styleUrls: ['./scrooling.component.css']
})
export class ScroolingComponent {
  list = Array.from({length: 100000}).map((_, i) => i);

}
