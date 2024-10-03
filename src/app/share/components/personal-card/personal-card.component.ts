import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  @Input('name') name:string = "";
  @Input('surname') surname:string = "";
  @Input('age') age:number = 0;
  @Input() isFav:boolean = false
  
  @Output() onDelete:EventEmitter<void> = new EventEmitter<void>
  constructor(private toastController: ToastController) {}
  delete(){
    this.onDelete.emit()
  }
  async onFavClick(event: any) {
    this.isFav = !this.isFav;
    await this.presentToast(this.isFav);
    event.stopPropagation(); 
  }

  async presentToast(isFav: boolean) {
    const toast = await this.toastController.create({
      message: `Usuario ${isFav ? 'añadido' : 'eliminado'} ${isFav? 'a' : 'de'} favoritos`,
      duration: 2000,
      position: 'bottom',
      color: isFav ? 'success' : 'danger',
    });
    toast.present();
  }

  ngOnInit() {}


}