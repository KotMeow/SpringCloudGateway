import {Component} from '@angular/core';
import {ApplicationService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationService]
})
export class AppComponent {
}
