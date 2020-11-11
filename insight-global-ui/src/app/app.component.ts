import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insight Gloabal';

  activeTitle = 'application';

  isActive(str) {
    return this.activeTitle === str ? 'active' : '';
  }

}
