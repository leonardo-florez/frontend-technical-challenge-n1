import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './shell.component.html',
})
export class ShellComponent { }
