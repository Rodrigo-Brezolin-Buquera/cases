import { Component, Input } from '@angular/core';
import { Card } from 'src/app/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() card:Card = {
  name: '',
  image: ''
}

@Input() baseUrl:string = ""
@Input() backCardImage:string = ""
}
