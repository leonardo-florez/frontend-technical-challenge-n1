import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-dashboard-stats',
  imports: [CommonModule],
  templateUrl: './dashboard-stats.component.html'
})
export class DashboardStatsComponent implements OnInit {
  purchaseService = inject(PurchaseService);

  ngOnInit() {
    this.purchaseService.getPurchases().subscribe();
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
