import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tesis-darney';

  goToDrive() {
    window.open('https://drive.google.com/drive/folders/1h8v2bEPN4lvG3qL92S1tNFK1YWNS36Of?usp=sharing', '_blank');
  }
}
