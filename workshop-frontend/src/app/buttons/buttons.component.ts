import {Component} from '@angular/core';
import {ApplicationService} from '../app.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(private _appService: ApplicationService) {
  }

  callWarehouse() {
    this._appService.getWarehouse()
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
  }

  callResource() {
    this._appService.getResource()
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
  }
}
