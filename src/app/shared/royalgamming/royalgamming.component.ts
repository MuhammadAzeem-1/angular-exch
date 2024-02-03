import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-royalgamming',
  standalone: true,
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './royalgamming.component.html',
  styleUrl: './royalgamming.component.css'
})

export class RoyalgammingComponent {


  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark

  cardArray:any = [
      {
        name: "Race to 17A",
        score: "568",
        Image: ""
      },
      {
        name: "Race to 17A",
        score: "197",
        Image: ""
      },
      {
        name: "Race to 17A",
        score: "168",
        Image: ""
      },
      {
        name: "Race to 17A",
        score: "168",
        Image: ""
      }
      ,
      {
        name: "Teenpatti",
        score: "368",
        Image: ""
      }
   
    ]

    cardArray1:any = [
      {
        name: "Teenpatti",
        score: "368",
        Image: ""
      },
      {
        name: "Teenpatti",
        score: "167",
        Image: ""
      },
      {
        name: "Teenpatti",
        score: "168",
        Image: ""
      },
      {
        name: "Teenpatti",
        score: "168",
        Image: ""
      }
      ,
      {
        name: "Teenpatti",
        score: "368",
        Image: ""
      },
      {
        name: "Teenpatti",
        score: "368",
        Image: ""
      }
    ]

    cardArray2:any = [
      {
        name: "Teenpati one day",
        score: "148",
        Image: ""
      },
      {
        name: "Teenpati one day",
        score: "167",
        Image: ""
      },
      {
        name: "Teenpati one day",
        score: "168",
        Image: ""
      },
      {
        name: "Teenpati one day",
        score: "168",
        Image: ""
      }
      
    ]

    // categories: any = [
    //   {
    //     name: "Papular"
    //   },
    //   {
    //     name: "Dealer Games"
    //   },
    //   {
    //     name: "Virtual Games"
    //   }
    // ]


  selectedCategory: string = '';
  
  categoryContent: any = this.cardArray; 
  arrayLength1: any = this.cardArray.length
  arrayLength2: any = this.cardArray1.length
  arrayLength3: any = this.cardArray2.length


  selectCategory(category: string) {
    this.selectedCategory = category;
    
    switch (category) {
      case 'Category1':
        this.categoryContent = this.cardArray;
        break;
      case 'Category2':
        this.categoryContent = this.cardArray1;
        break;
      case 'Category3':
        this.categoryContent = this.cardArray2;
        break;
      default:
        this.categoryContent = '';
        break;
    }

  }


  // cardArray:any = [
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "167",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   }
  //   ,
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   },
  //   {
  //     name: "Race to 17A",
  //     score: "168",
  //     Image: ""
  //   }
  // ]

}
