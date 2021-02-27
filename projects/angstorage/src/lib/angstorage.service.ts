/**
 * Author: Satish Umagol
 * Github: https://github.com/umagol
 * Version:2.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngstorageService {

  constructor() { }

  /**
   * 
   * @param Cookie_Name :Cookie Name
   * @param Cookie_Value :Cookie Value
   * @param ExpireTime : It's a default parameter and default time is 5 hrs time in Milliseconds. 
   */
  public setCookie(Cookie_Name: string, Cookie_Value: string, ExpireTime = 18000000): void {

    const date = new Date(); // Set data 
    const value = Cookie_Value; // Set Cookie Value
    try {

      date.setTime(date.getTime() + ExpireTime); // Current time + give time = expireTime

      // Set Cookie
      document.cookie = Cookie_Name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
    catch (error) {
      console.error(error);
    }
  }

/////////////////////////////////////////////////////////////////////////////

  /**
  * @param Cookie_Name :Cookie Name
  */
  public getCookie(Cookie_Name: string): any | null | undefined {

    var Cookie_Name = Cookie_Name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(Cookie_Name) == 0) return c.substring(Cookie_Name.length, c.length);
    }
    return null;
  }

  //////////////////////////////////////////////////////////////////////////////////

  /**
   * @param Cookie_Name cookie name for remove that cookie
   */
  public removeCookie(Cookie_Name: string): void {

    const date = new Date();
    try {
      // Set current time -1 day
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

      // Set Cookies
      document.cookie = Cookie_Name + "=; expires=" + date.toUTCString() + "; path=/";
    } catch (error) {
      console.error(error);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  /**
   * Remove all Cookies is the Browser
   */
  public removeAllCookie(): void {
    var res = document.cookie;
    var multiple = res.split(";");
    try {
      for (var i = 0; i < multiple.length; i++) {
        var key = multiple[i].split("=");
        document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
      }
    } catch (error) {
      console.error(error)
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  /**
  * Check Is cookie exist or not
  */
  public isCookie(Cookie_Name: any): boolean {
    // let Cookie = document.cookie.indexOf( Cookie_Name + '=' );
    let Cookie = document.cookie.match(RegExp('(?:^|;\\s*)' + Cookie_Name + '=([^;]*)'));
    if (Cookie == null) {
      return false;
    } else {
      return true;
    }
  }

  ///////////////////////////////////Local Storage //////////////////////////////////////////////////

/**
 * @param Localstorage_Name Localstorage Name
 * @param Localstorage_Value : Local stroage Value
 */

  public setLocalStorage(Localstorage_Name: string, Localstorage_Value: string): void {

    
    const date = new Date();

    try {
      localStorage.setItem(Localstorage_Name, Localstorage_Value);
    } catch (error) {
      console.error(error);
    }
  }

/////////////////////////////////////////////////////////////////////////////

/**
 * @param Localstorage_Name localstorage Name For get data
 */
  public getLocalStorage(Localstorage_Name: string): any | null | undefined {

    try {
      const value = localStorage.getItem(Localstorage_Name);
      if (value == null) {
        return null;
      }
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }

////////////////////////////////////////////////////////////////////////////////

/**
 * @param Localstorage_Name Localstorage Name For Remove data
 */
  public removeLocalStorage(Localstorage_Name: string): void {

    try {
      const Remove_data = localStorage.removeItem(Localstorage_Name);
      if (Remove_data == null) {
        //Error
      }
    } catch (error) {
      console.error(error);
    }
  }

/////////////////////////////////////////////////////////////////////////////////

  /**
   * @Remove All Data is Localstorage
   */
  public removeAllLocalStorage(): void {

    try {
      const Remove_all_data = localStorage.clear();
    } catch (error) {
      throw new Error(error);
    }
  }

////////////////////////////////////////////////////////////////////////////////

  /**
   * @param Localstorage_Name : Name For check data is exist or not
   */
  public isLocalStorage(Localstorage_Name: string): boolean {

    const data = localStorage.getItem(Localstorage_Name);
    try {

      if (data == null) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      throw new Error(error);
    }
  }


///////////////////////////////////Session Storage////////////////////////////////////

/**
 * @param Sessionstorage_Name Name For set data in sesion storage 
 * @param Sessionstorage_Value set value in session storage
 */
  public setSessionStorage(Sessionstorage_Name: string, Sessionstorage_Value: string): void {
    const date = new Date()

    try {
      sessionStorage.setItem(Sessionstorage_Name, Sessionstorage_Value);
    } catch (error) {
      console.error(error);
    }
  }

//////////////////////////////////////////////////////////////////////////////
  
  /**
   * 
   * @param Sessionstorage_Name Session Name for get data
   */
  public getSessionStorage(Sessionstorage_Name: string): any | null | undefined {
    try {
      const value = sessionStorage.getItem(Sessionstorage_Name);
      if (value == null) {
        return null;
      }
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }

///////////////////////////////////////////////////////////////////////////////////////

/**
 * @param Sessionstorage_Name remove single data 
 */
  public removeSessionStorage(Sessionstorage_Name: string): void {

    try {
      const Remove_data = sessionStorage.removeItem(Sessionstorage_Name);
      if (Remove_data == null) {
        //Error
      }
    } catch (error) {
      console.error(error);
    }
  }

///////////////////////////////////////////////////////////////////////////////////

  /**
   * Remove all data in session stroage
   */
  public removeAllSessionStorage(): any {
    try {
      const Remove_all_data = sessionStorage.clear();
    } catch (error) {
      throw new Error(error);
    }
  }

///////////////////////////////////////////////////////////////////////////////////

  /**
   * @param Sessionstorage_Name Check Session is exist or not
   */
  public isSessionStorage(Sessionstorage_Name: string): boolean {

    const data = sessionStorage.getItem(Sessionstorage_Name);
    try {
      if (data == null) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

/////////////////////////////////// Set Expiry time to LocalStorage and SessionStorage ////////////////////////////////////////////


/**
 * 
 * @param Localstorage_Name Localstorage Name
 * @param Localstorage_Value Localstorage Value
 * @param ExpireTime Localstorage Expiry Time
 */

setLocalStorageWithExpiry(Localstorage_Name: string, Localstorage_Value: string,ExpireTime: any): any {
  const now = new Date()
  const item = {
      value: Localstorage_Value,
      expiry: now.getTime() + ExpireTime,
  }
  localStorage.setItem(Localstorage_Name, JSON.stringify(item))
}

////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param Localstorage_Name Localstorage Name
 */

getLocalStorageWithExpiry(Localstorage_Name: string) {
  const itemStr = localStorage.getItem(Localstorage_Name);
  if (!itemStr) {
      return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
      localStorage.removeItem(Localstorage_Name);
      return null;
  }
  return item.value
}

/**
 * 
 * @param Sessionstorage_Name Session storage Name
 * @param Sessionstorage_Value Sessin storage Value
 * @param ExpireTime Session storage Expiry Time
 */

setSessionStorageWithExpiry(Sessionstorage_Name: string, Sessionstorage_Value: string, ExpireTime: any): any {
  const now = new Date()
  const item = {
      value: Sessionstorage_Value,
      expiry: now.getTime() +  ExpireTime,
  }
  sessionStorage.setItem(Sessionstorage_Name, JSON.stringify(item))
}



getSessionStorageWithExpiry(Sessionstorage_Name: string, key: any) {
  const itemStr = sessionStorage.getItem(Sessionstorage_Name);
  if (!itemStr) {
      return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
      sessionStorage.removeItem(Sessionstorage_Name);
      return null;
  }
  return item.value
}
}