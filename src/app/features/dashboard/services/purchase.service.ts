import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Purchase } from '../../../shared/interfaces/purchase.interface';
import { GeneralResponse } from '../../../shared/interfaces/general-response.interface';
import { environment } from '../../../../environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  http = inject(HttpClient);

  private _purchases = signal<Purchase[]>([]);
  
  purchases = computed(() => this._purchases());
  
  // Computed para obtener la cantidad total de maíz
  totalCorn = computed(() => this._purchases().length);
  
  // Computed para obtener la última compra
  lastPurchase = computed(() => {
    const purchases = this._purchases();
    if (purchases.length === 0) return null;
    
    return purchases.reduce((latest, current) => {
      const currentDate = new Date(current.purchaseAt);
      const latestDate = new Date(latest.purchaseAt);
      return currentDate > latestDate ? current : latest;
    });
  });

  // Obtener compras del usuario
  getPurchases() {
    return this.http.get<GeneralResponse<Purchase[]>>(`${environment.backendUrl}/purchases`)
      .pipe(
        tap(res => {
          if (res.data) {
            this._purchases.set(res.data);
          }
        })
      );
  }

  // Comprar una unidad de maíz
  buyCorn() {
    return this.http.post<GeneralResponse<Purchase>>(`${environment.backendUrl}/purchases`, {})
      .pipe(
        tap(res => {
          if (res.data) {
            // Agregar la nueva compra a la lista existente
            this._purchases.update(purchases => [...purchases, res.data!]);
          }
        })
      );
  }
}
