import { Injectable } from '@angular/core';
import { delay,finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from '../_services/loading-spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: LoadingSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      delay(100),
      finalize(()=>{
        this.busyService.idle();
      })
    );
  }
}
