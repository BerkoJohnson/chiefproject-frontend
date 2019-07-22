import { Component } from '@angular/core';
import { AuthService } from './_helpers/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontApp';
constructor(public auth: AuthService) {}

}
