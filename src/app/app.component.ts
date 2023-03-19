import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';

  onLogoClick(){
    alert('Logo clicked');
  }

  onKeyUp(newTitle: string){
    this.title = newTitle;

  }

}


