import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class ApplicationException implements ErrorHandler {

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

    }
  }
}
