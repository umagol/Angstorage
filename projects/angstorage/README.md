# Angstorage

   <img src="https://raw.githubusercontent.com/umagol/Angstorage/master/projects/angstoragetest/src/assets/logo.png" width="100%" />

AngStrorage is an Angular Library (Package),it is used for storing data on Web Browser in Cookie Storage, Session Storage and Local Storage. 
AngStroage also provides other functions like isset isSetCookie(), isSetLocalstorage(), isSetLocalstorage for checking data is set or not.


## Table of contents

- [Installation](#Installation)
- [Import](#Import)
- [Function](#Function)
- [Uses](#Uses)
- [License](#License)

# Installation

        npm install angstorage --save

- This commond use for adding package in your project, `--save` is used to add this package info in your package.json file.

## Import

- In your ts file import this package like this.


      import { AngstorageService } from 'angstorage';



- Declare this package in constructor like above.

      constructor( private NgWebStroage: AngstorageService ){

      }


## Uses


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



## Function

# Cookie Function


- Method Used to set data in cookies storage

      1. setCookie(
          Cookie_Name: string,
          Cookie_Value: string,
          ExpireTime = 18000000)
        

- Method Used to Get data in cookie storage

      2. getCookie(
          Cookie_Name: string)


- Method used to Remove  specific data in cookie storage

      3. public removeCookie(
          Cookie_Name: string)
       
- Clear all cookie        
    
      4. public removeAllCookie()


- Check cookie is set or not

      5. public isCookie(
          Cookie_Name: any)
 



# Local Storage

- Set data in localstorage

      6. public setLocalStorage(
          Localstorage_Name: string,
          Localstorage_Value: string)


- Get data from Localstorage

      7. public getLocalStorage(
          Localstorage_Name: string)
        
- Remove data from Loalstorage

      8. public removeLocalStorage(
          Localstorage_Name: string)
        
- Clear all localtorage data 

      9. public removeAllLocalStorage()

- Check data is set or not

      10.public isLocalStorage(
          Localstorage_Name: string)
       


# Session Storage

-  Set data in Sessionstorage

        11. public setSessionStorage(
            Sessionstorage_Name: string,
            Sessionstorage_Value: string)

- Get data from Sessionstorage

      12. public getSessionStorage(
          Sessionstorage_Name: string)

- Remove specific data of Sessionstorage

      13. public removeSessionStorage(
          Sessionstorage_Name: string)

- Clear all Sessiontorage data 

      14. public removeAllSessionStorage()

- Check data is set or not

      15. public isSessionStorage(
          Sessionstorage_Name: string)





## License
    MIT 

