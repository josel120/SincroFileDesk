import { Injectable } from '@angular/core';
import { Router, CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(){    
    return true;
  }
}
