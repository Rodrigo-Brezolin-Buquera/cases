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

  ngOnInit(): void {
    this.service.getCardBaseURL().subscribe((url)=>{
      this.baseImageURL = url[0]
    })

    this.service.getCardBaseURL().subscribe((url)=>{
      this.backcardImage = url[0]
    })


    this.service.getCards().subscribe((list)=>{
      this.cardList = list
    })
  }

}
