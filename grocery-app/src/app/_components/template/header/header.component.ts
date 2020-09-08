import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : Observable<boolean>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn
    console.info(this.isLoggedIn)
  }

  handleLogout(){
    this.authenticationService.logout()
    this.router.navigateByUrl('/login');
  }

}
