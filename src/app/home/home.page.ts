import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';


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

  constructor(private router: Router, private alertController: AlertController) {
    this.people.push({
      name: "Alonso",
      surname: "Sánchez Moreno de Vega",
      age: 20,
      isFav: false
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(e => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        const newPerson: PersonCard = navigation.extras.state['person'];

        // Verificar si hay una nueva persona y añadirla
        if (newPerson) {
          this.people.push(newPerson);
        }
      }
    });

  }

  async confirmDelete(person: PersonCard) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que quieres eliminar a ${person.name} ${person.surname}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deletePerson(person);
          }
        }
      ]
    });

    await alert.present();
  }

  deletePerson(person: PersonCard) {
    this.people = this.people.filter(p => p !== person);
  }
}

