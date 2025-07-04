import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications = signal<Notification[]>([]);
  
  notifications = this._notifications.asReadonly();

  showError(title: string, message: string, duration: number = 5000) {
    this.addNotification({
      type: 'error',
      title,
      message,
      duration
    });
  }

  showSuccess(title: string, message: string, duration: number = 3000) {
    this.addNotification({
      type: 'success',
      title,
      message,
      duration
    });
  }

  showWarning(title: string, message: string, duration: number = 4000) {
    this.addNotification({
      type: 'warning',
      title,
      message,
      duration
    });
  }

  showInfo(title: string, message: string, duration: number = 3000) {
    this.addNotification({
      type: 'info',
      title,
      message,
      duration
    });
  }

  private addNotification(notification: Omit<Notification, 'id'>) {
    const id = this.generateId();
    const newNotification: Notification = {
      id,
      ...notification
    };

    this._notifications.update(notifications => [...notifications, newNotification]);

    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        this.removeNotification(id);
      }, notification.duration);
    }
  }

  removeNotification(id: string) {
    this._notifications.update(notifications => 
      notifications.filter(notification => notification.id !== id)
    );
  }

  clearAll() {
    this._notifications.set([]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
