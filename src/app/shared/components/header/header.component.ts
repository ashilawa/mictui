import {Component, OnInit} from '@angular/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import {AppConfig} from '../../../configs/app.config';
import {LocalStorage} from 'ngx-store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @LocalStorage() language = 'en';

  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;

  ngOnInit() {}

  private loadMenus(): void {
    this.menuItems = [
      {link: '/', name: _('home')}
    ];
  }
}