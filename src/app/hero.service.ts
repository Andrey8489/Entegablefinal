import { Injectable, ɵɵtrustConstantHtml } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<hero[]> {
    this.messageService.add('HeroService: mensajes de los heroes');
    return of(HEROES);
  }
  
}
