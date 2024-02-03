import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamingSectionComponent } from './shared/gaming-section/gaming-section.component';
import { RoyalgammingComponent } from './shared/royalgamming/royalgamming.component';
import { ScoreSectionComponent } from './shared/score-section/score-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamingSectionComponent, RoyalgammingComponent, ScoreSectionComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exch-interphase';

  faBars = faBars;
  faHome = faHome;
  faUser =faUser;

  
}
