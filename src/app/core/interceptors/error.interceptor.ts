import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorTitle = 'Error';
      let errorMessage = 'An unexpected error occurred';

      // Handle different types of errors
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorTitle = 'Network Error';
        errorMessage = error.error.message || 'Please check your internet connection';
      } else {
        // Server-side error
        switch (error.status) {
          case 400:
            errorTitle = 'Bad Request';
            errorMessage = error.error?.message || 'Invalid request data';
            break;
          case 401:
            errorTitle = 'Authentication Required';
            errorMessage = 'Please log in to continue';
            break;
          case 403:
            errorTitle = 'Access Denied';
            errorMessage = 'You don\'t have permission to perform this action';
            break;
          case 404:
            errorTitle = 'Not Found';
            errorMessage = 'The requested resource was not found';
            break;
          case 500:
            errorTitle = 'Server Error';
            errorMessage = 'Internal server error. Please try again later';
            break;
          case 503:
            errorTitle = 'Service Unavailable';
            errorMessage = 'Service is temporarily unavailable';
            break;
          default:
            errorTitle = `Error ${error.status}`;
            errorMessage = error.error?.message || error.message || 'An unexpected error occurred';
        }
      }

      // Show error notification
      notificationService.showError(errorTitle, errorMessage);

      // Re-throw the error so components can still handle it if needed
      return throwError(() => error);
    })
  );
};
