import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import LockIcon from '@mui/icons-material/Lock';


@Component({
  selector: 'app-gaming-section',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './gaming-section.component.html',
  styleUrl: './gaming-section.component.css',
  

})
export class GamingSectionComponent {
  isGameActive : boolean = true;
  isDataActive: any = false;
  isBetActive: any = false;
  selectedPlayerIndex: number | null = null

  faXmark= faXmark;
  LockIcon = LockIcon


   playerData:any = [
    {
      name: "Player A",
      Back: 22,
      Lay: 23,
    },
    {
      name: "Player B",
      Back: 12,
      Lay: 25,
    }
  ]

  handleBet(index:number){
     this.isBetActive = !this.isBetActive
     this.selectedPlayerIndex = index;
     
  }

  toggleGameView() {
    console.log(this.isGameActive);
    
    this.isGameActive = !this.isGameActive;
    console.log(this.isGameActive);
    
    
  }
}
