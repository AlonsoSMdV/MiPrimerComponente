import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  @Input('name') name:String = ""
  @Input('surname') surname:String = ""
  @Input('age') age:String = ""
  
  constructor() { }

  ngOnInit() {}

}
