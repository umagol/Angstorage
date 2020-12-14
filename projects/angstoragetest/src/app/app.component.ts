import { Component } from '@angular/core';
import { AngstorageService } from 'angstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angstoragetest';

  constructor( private NgWebStroage: AngstorageService ){}

  CookieName:string = "cookiesName";
  CookieValue:string = "cookiesValue";

  LocalStorageName: string = "LocalstorageName";
  LocalStorageValue: string = "LocalstorageValue";

  SessionStorageName: string = "SessionstorageName";
  SessionStorageValue: string = "SessionstorageValue";

  getCookiesdata: string = "";
  getlocalstoragedata: string = "";
  getsessionstoragedata: string = "";

/////////////////////////////////Cookie Storage////////////////////////////

  getCookie(): any{
    this.getCookiesdata = this.NgWebStroage.getCookie(this.CookieName);
  }

  setCookie(): any{
    this.NgWebStroage.setCookie(this.CookieName, this.CookieValue,60000);
  }

  removeCookie(): any{
    this.NgWebStroage.removeCookie(this.CookieName);
  }

  removeAllCookie(): any{
    this.NgWebStroage.removeAllCookie();
  }
  
  isSetCookie(): any{
    this.NgWebStroage.isCookie(this.CookieName);
  }

//////////////////////////////LocalStorage////////////////////////////////


  getLocalstorage(): any{
   this.getlocalstoragedata = this.NgWebStroage.getLocalStorage(this.LocalStorageName);
  }

  setLocalstorage(): any{
    this.NgWebStroage.setLocalStorage(this.LocalStorageName, this.LocalStorageValue);
  }

  removeLocalstorage(): any{
    this.NgWebStroage.removeLocalStorage(this.LocalStorageName);
  }

  removeAllLocalstorage(): any{
    this.NgWebStroage.removeAllLocalStorage();
  }

  isSetLocalstorage(): any{
    this.NgWebStroage.isLocalStorage(this.LocalStorageName);
  }

///////////////////////////////SessionStorage//////////////////////////


  getsessionstorage(): any{
   this.getsessionstoragedata = this.NgWebStroage.getSessionStorage(this.SessionStorageName);
  }

  setSessionstorage(): any{

    this.NgWebStroage.setSessionStorage(this.SessionStorageName,this.SessionStorageValue);
  }

  removesessionstorage(): any{
    this.NgWebStroage.removeSessionStorage(this.SessionStorageName);
  }

  removeAllsessionstorage(): any{
    this.NgWebStroage.removeAllSessionStorage();
  }

  isSetsessionstorage(): any{
    this.NgWebStroage.isSessionStorage(this.SessionStorageName);
  }
}
