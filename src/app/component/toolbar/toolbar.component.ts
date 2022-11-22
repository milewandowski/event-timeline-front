import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {Role} from '../../enum/role.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isUserLoggedIn = false;
  isUserEmployeeOrAdmin = false;
  user: User = new User();

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isUserEmployeeOrAdmin = this.authenticationService.isUserLoggedIn() &&
      (this.authenticationService.getUserFromLocalCache().role === Role.ROLE_EMPLOYEE || this.authenticationService.getUserFromLocalCache().role === Role.ROLE_ADMIN);
    this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
    this.user = this.authenticationService.getUserFromLocalCache();
  }

  logOut(): void {
    this.authenticationService.logout();
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/timeline');
  }
}
