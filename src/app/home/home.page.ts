import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { PeopleService } from '../share/service/people.service'


export interface Person {
  name: string,
  surname: string,
  age: number
}

export interface PersonCard extends Person{
  isFav: Boolean
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  people: PersonCard[] = [
    {name:"Juan A.", surname:"garcía gómez", age:46, isFav:true},
    {name:"Alejandro", surname:"garcía gómez", age:45, isFav:true},
    {name:"juan", surname:"garcía Valencia", age:4, isFav:false},
    {name:"María del Mar", surname:"Valencia Valencia", age:46, isFav:true},
    {name:"Lydia", surname:"garcía Robles", age:11, isFav:false}];

  constructor(public peopleSvc: PeopleService) {

  }

}

