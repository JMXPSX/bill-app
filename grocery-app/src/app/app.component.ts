import { Component } from '@angular/core';
import { User } from './_models';
import { AccountService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // user: User;
  user: String;
  title = 'grocery-app';

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(
        x => {
          this.user = x      
          console.info('this.user ', this.user)    
        }
      );
    
  }

  logout(){
    this.accountService.logout();
  }

}
