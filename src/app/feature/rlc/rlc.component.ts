import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-rlc',
  templateUrl: './rlc.component.html',
  styleUrls: ['./rlc.component.css']
})
export class RlcComponent implements OnInit {

  public tabIndex = 0;
  title = 'Risk legal counterpart';
  private router: Router;
  public drawer : number ;

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(r: Router){
    this.router = r;
  }

onDialogShow(): void{


}
saveUser() : void{


}
show() : void{


}









  closeDrawer(): void{
            this.drawer=0;
  }

  swipe(action = this.SWIPE_ACTION.RIGHT){
         
     if (action === this.SWIPE_ACTION.RIGHT) {
        
      if(this.tabIndex === 0){
        
        this.drawer=1;
      }
      else{
        this.tabIndex=this.tabIndex - 1;
      }

     }
      if (action === this.SWIPE_ACTION.LEFT){
          if(this.tabIndex === 2){

          }
          else{
            this.tabIndex++;
          }

      }

    
  
  }
          
          

  goToLineSituation(): void{
    this.router.navigate(['/linesituation']); 
  }

  ngOnInit(): void {
  }

 rlc:any = [
      {Name: 'HDFC bank', Rating: '10+', StandardRating: 11 },
      {Name: 'Duteche bank', Rating: '7+', StandardRating: 11 },
      {Name: 'Bank of baroda', Rating: '1+', StandardRating: 11 },
      {Name: 'State bank of India', Rating: '9+', StandardRating: 11 },
      {Name: 'ICIC bank', Rating: '10+', StandardRating: 11 },
      {Name: 'Canara bank', Rating: '9+', StandardRating: 11 },
      {Name: 'SBM bank', Rating: '5+', StandardRating: 11 },
      {Name: 'SBI bank', Rating: '4+', StandardRating: 11 },
      {Name: 'RBI bank', Rating: '3+', StandardRating: 11 },
      {Name: 'IOB bank', Rating: '6+', StandardRating: 11 },
      {Name: 'Corporation bank', Rating: '7+', StandardRating: 11 },
      {Name: 'Vijay bank', Rating: '18+', StandardRating: 11 },
      {Name: 'HSBC bank', Rating: '7+', StandardRating: 11 },
    ]
 

  
}
