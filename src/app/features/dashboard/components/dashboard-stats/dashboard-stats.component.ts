import { Component, inject, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-dashboard-stats',
  imports: [CommonModule],
  templateUrl: './dashboard-stats.component.html'
})
export class DashboardStatsComponent implements OnInit {
  private purchaseService = inject(PurchaseService);

  // Signals computadas para el template
  totalCorn = computed(() => this.purchaseService.totalCorn());
  lastPurchase = computed(() => this.purchaseService.lastPurchase());

  ngOnInit() {
    this.purchaseService.getPurchases().subscribe();
  }
}
