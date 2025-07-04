import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-buy-corn',
  imports: [CommonModule],
  templateUrl: './buy-corn.component.html'
})
export class BuyCornComponent {
  purchaseService = inject(PurchaseService);
  notificationService = inject(NotificationService);
  
  isLoading = false;

  buyCorn() {
    this.isLoading = true;

    this.purchaseService.buyCorn().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.notificationService.showSuccess(
          'Purchase Successful! 🎉',
          'Your corn has been added to your collection.'
        );
      },
      error: (error) => {
        this.isLoading = false;
        // Error will be handled by the error interceptor
      }
    });
  }
}
