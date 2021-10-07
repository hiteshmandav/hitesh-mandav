import { Component, OnInit } from '@angular/core';
import { faAngular, faCss3, faCss3Alt, faHtml5, faJs, faNode, faPython, faGithub, faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  faAngular = faAngular;
  faNode = faNode;
  faJS = faJs;
  faHtml5 = faHtml5;
  faCss = faCss3Alt;
  faPython = faPython;
  faGithub = faGitAlt;
  faJava = faJava

  constructor() { }

  ngOnInit(): void {
  }

}
