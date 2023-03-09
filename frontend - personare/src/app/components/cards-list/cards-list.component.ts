import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/cards';
import { CardsService } from 'src/app/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  cardList:Card[]=[]
  baseImageURL:string = ""
  backcardImage:string =""

  constructor(private service: CardsService){}

  shuffle(array: Card[]) {
    let currentIndex = array.length
    let randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }


  ngOnInit(): void {
    this.service.getCardBaseURL().subscribe((url)=>{
      this.baseImageURL = url[0]
    })

    this.service.getBackImage().subscribe((url)=>{
      this.backcardImage = url[0]
    })

    this.service.getCards().subscribe((list)=>{
      this.cardList = this.shuffle(list)
    })
  }

}
