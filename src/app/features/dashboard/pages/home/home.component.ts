import { Component } from '@angular/core';
import { DashboardStatsComponent } from '../../components/dashboard-stats/dashboard-stats.component';
import { BuyCornComponent } from '../../components/buy-corn/buy-corn.component';

@Component({
  selector: 'app-home',
  imports: [DashboardStatsComponent, BuyCornComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent { }
