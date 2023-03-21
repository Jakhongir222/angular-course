import { Component } from '@angular/core';
import { Course } from './course-card/course';
import { COURSES } from './db-data';

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

  courses= COURSES;



  onCourseSelected(course: Course){
    console.log("Course selected" , course);
  }

}


