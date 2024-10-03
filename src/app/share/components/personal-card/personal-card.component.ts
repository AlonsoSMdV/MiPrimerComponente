import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




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
  
  constructor() {}

  ngOnInit() {}

  @Output() favClicked: EventEmitter<void> = new EventEmitter<void>
  onFavClick(event: MouseEvent){
    this.favClicked.emit();
  }


}