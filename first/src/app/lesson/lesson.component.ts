import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htw-lesson',
  template: `
    <p>
      lesson works!
    </p>
  `,
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
