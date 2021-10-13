import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter, withLatestFrom ,shareReplay } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUser, faFile, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('drawer') drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    faLinkedinIn = faLinkedinIn;
    faGithub = faGithub;
    faMediumM = faMediumM;
    faChess = faChess;
    faHome = faHome;
    faUser = faUser;
    faFile = faFile;
    faProjectDiagram = faProjectDiagram;
    faEnvelope = faEnvelope;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) {
                router.events.pipe(
                  withLatestFrom(this.isHandset$),
                  filter(([a, b]) => b && a instanceof NavigationEnd)
                ).subscribe(_ => this.drawer.close());
              }

  testfuntion(){
    console.log('hi')
  }
}
