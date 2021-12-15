import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(private router: Router) {

  }

  btnClick() {
    console.log("click")
    this.router.navigateByUrl('/about');
  };

}


