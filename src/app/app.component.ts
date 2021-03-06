import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  user = null;

  constructor(
    private sidebarService: NbSidebarService,
    public login: LoginService,
    private ngxSpinner: NgxSpinnerService,
    private themeService: NbThemeService,
    public router: Router
  ) {}

  layout: any = {};
  sidebar: any = {};
  isCompact = true;
  isDarkMode = false;

  private alive = true;

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.logInStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  title = 'pariksan_portal-frontend';

  toggleCompact() {
    this.sidebarService.toggle(true);
    this.isCompact = !this.isCompact;
  }

  public logout() {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'info',
      confirmButtonText: 'Logout',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.logout();
        this.router.navigate(['']);
      } else {
        return;
      }
    });
  }
  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.themeService.changeTheme('default');
    } else {
      this.themeService.changeTheme('dark');
    }
  }
}
