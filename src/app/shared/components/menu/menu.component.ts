import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
      this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                // command: () => {
                //   this.router.navigate(['']);
                // },
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                // command: () => {
                //   this.router.navigate(['numbers']);
                // }
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                // command: () => {
                //   this.router.navigate(['uncommon']);
                // }
                routerLink: 'uncommon'
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog'
              }
            ]
          }
      ];
  }
}
