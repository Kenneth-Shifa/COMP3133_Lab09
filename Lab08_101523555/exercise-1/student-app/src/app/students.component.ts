import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: false,
  template: `<h1>{{ getTitle() }} — {{ getCurrentDate() }}</h1>`,
})
export class StudentsComponent {
  title = 'Students';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
