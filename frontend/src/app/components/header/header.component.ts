import { Component, OnInit } from '@angular/core';
import { faLinkedin,faTwitter,faGit } from '@fortawesome/free-brands-svg-icons';
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faLinkedin=faLinkedin;
  faTwitter = faTwitter;
  faGit=faGit;
  faUserLock=faUserLock;
  

  constructor() { }

  ngOnInit(): void {
  }

}
