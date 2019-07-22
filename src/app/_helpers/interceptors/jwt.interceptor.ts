import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.token) {
      const newReq = req.clone({
        headers: req.headers.set('auth', this.authService.token)
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
