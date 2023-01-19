import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly baseImageURL = 'http://localhost:3000/imagesUrl';
  private readonly baseBackImageURL = 'http://localhost:3000/imageBackCard';
  private readonly API = 'http://localhost:3000/cards';

  constructor(private http:HttpClient) {}

  getCards(): Observable<Card[]>{
    return this.http.get<Card[]>(this.API)
  }

  getCardBaseURL(): Observable<string>{
    return this.http.get<string>(this.baseImageURL)
  }

  getBackImage(): Observable<string>{
    return this.http.get<string>(this.baseBackImageURL)
  }
}
