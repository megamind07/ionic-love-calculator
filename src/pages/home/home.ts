import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1: string = '';
  name2: string = '';

  get score() {
    const combined_name = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (var i=0; i < combined_name.length;i++) {
      sum += combined_name.charCodeAt(i);
    }
    sum = sum % 101;

    return sum;
  }

  get image() {
    let img: string = "";
    let sum: number = this.score;
    img = (sum > 79) ? "stan and wendy.png" :
          (sum > 59) ? "aladdin and jasmine.gif" :
          (sum > 39) ? "mario and princess.jpg" :
          (sum > 19) ? "mickey and minnie.jpg" : "tangled.jpg";

    return img;
  }

}
