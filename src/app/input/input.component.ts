import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Input() objeto:{};
  constructor() { }

  ngOnInit() {
    console.log(this.objeto + " input"  );
  }

}
