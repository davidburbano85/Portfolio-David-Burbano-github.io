import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rigth',
  templateUrl: './rigth.component.html',
  styleUrls: ['./rigth.component.css'],
})
export class RigthComponent implements OnInit {
  @Input()  clase: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
