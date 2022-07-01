import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  //@ts-ignore
  @Input() backgroundColor = "#D9D9D9"
  //@ts-ignore
  @Input() progressColor = "#4CAF50"
  //@ts-ignore
  @Input() progress = 0;

  loading(){
    let interval = setInterval(() =>{
      this.progress = +this.progress + 5;
      if (this.progress == 100){
        clearInterval(interval);
      }
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
    this.loading()
  }

}
