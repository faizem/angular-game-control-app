import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastInterval = 0;
  constructor() { }

  ngOnInit() {
  }

  onStart()
  {
    this.interval = setInterval(() => {
    this.intervalFired.emit(this.lastInterval + 1);
    this.lastInterval++;
    },1000)
  }
  onStop()
  {
    clearInterval(this.interval);
  }
}
