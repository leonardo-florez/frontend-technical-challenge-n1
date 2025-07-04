import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-buy-corn',
  imports: [CommonModule],
  templateUrl: './buy-corn.component.html'
})
export class BuyCornComponent {
  purchaseService = inject(PurchaseService);
  
  isLoading = false;
  message = '';
  messageClass = '';

  buyCorn() {
    this.isLoading = true;
    this.message = '';

    this.purchaseService.buyCorn().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.message = 'Corn purchased successfully! 🎉';
        this.messageClass = 'bg-green-100 text-green-700 border border-green-200';
        
        // Clear message after 3 seconds
        setTimeout(() => {
          this.message = '';
        }, 3000);
      },
      error: (error) => {
        this.isLoading = false;
        this.message = 'Failed to purchase corn. Please try again.';
        this.messageClass = 'bg-red-100 text-red-700 border border-red-200';
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    });
  }
}
