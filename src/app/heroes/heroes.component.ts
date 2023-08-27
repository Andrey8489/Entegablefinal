import { Component, OnInit, Input } from '@angular/core';
import { hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
[x: string]: any;
  
  heroes: hero[];


  constructor(private HeroService: HeroService, private messageService: MessageService,) {
    this.heroes=[];
  }



  ngOnInit(): void {
    this.getHeroes();
  }
   
  private getHeroes():void {
    
    this.HeroService.getHeroes()
    .subscribe((heroes: hero[]) => {
      this.heroes = heroes;
    });
  }
}
