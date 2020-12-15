# Angstorage


[![image](https://raw.githubusercontent.com/umagol/Angstorage/master/projects/angstoragetest/src/assets/Add%20a%20heading.png)](https://github.com/umagol/Angstorage?tab=repositories)

AngStrorage is Angular Library (Package) for Using store small size of data on web browser in cookie storage, session storage and Local storage 
AngStroage is also provide some another function link isset... using for check data is store or not. 

## Table of contents

- [Installation](#Installation)
- [Import](#Import)
- [Funstion](#Function)
- [Usage](#Usage)
- [License](#License)

# Installation

        npm install angstorage --save

This commond use for adding package in your project `--save` is use to add this package info in your package.json file

## Import

    constructor( private NgWebStroage: AngstorageService ){

    }

Add variable in your constructor for using hole file

## Usage


# Cookie Stroage


  getCookie(): any{

    this.getCookiesdata = this.ANgWebStroage.getCookie(this.CookieName);
 
  }

  setCookie(): any{

    this.ANgWebStroage.setCookie(this.CookieName, this.CookieValue,60000);
 
  }

  removeCookie(): any{

    this.ANgWebStroage.removeCookie(this.CookieName);
 
  }

  removeAllCookie(): any{

    this.NgWebStroage.removeAllCookie();
  
  }
  
  isSetCookie(): any{

    this.NgWebStroage.isCookie(this.CookieName);

  }


# Local Storage

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


# Session Storage


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

ss


## Function

# Cookie Function

    1. setCookie(
        Cookie_Name: string,
        Cookie_Value: string,
        ExpireTime = 18000000)
        
Using for set data in cookies storage

    2. getCookie(
        Cookie_Name: string)

Get data in cookie storage

    3. public removeCookie(
        Cookie_Name: string)
        
Remove  specific data in cookie storage
    
    4. public removeAllCookie()

Clear all cookie 

    5. public isCookie(
        Cookie_Name: any)
 
Check cookie is set or not



# Local Storage

    6. public setLocalStorage(
        Localstorage_Name: string,
        Localstorage_Value: string)

:Set data in localstorage

    7. public getLocalStorage(
        Localstorage_Name: string)
        
:Get data form Localstorage

    8. public removeLocalStorage(
        Localstorage_Name: string)
        
:Remove data from Loalstorage

    9. public removeAllLocalStorage()

:clear all localtorage data 

    10.public isLocalStorage(
        Localstorage_Name: string)
        
:Check data is set or not


# Session Storage

    11. public setSessionStorage(
        Sessionstorage_Name: string,
        Sessionstorage_Value: string)

Set data in sessionstorage

    12. public getSessionStorage(
        Sessionstorage_Name: string)

Get data form sessionstorage

    13. public removeSessionStorage(
        Sessionstorage_Name: string)

Remove specific data in session storage

    14. public removeAllSessionStorage()

clear all sessiontorage data 

    15. public isSessionStorage(
        Sessionstorage_Name: string)

Check data is set or not




## License

    `MIT License`

