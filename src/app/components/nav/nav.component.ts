import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUser, faFile, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

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

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  testfuntion(){
    console.log('hi')
  }
}
