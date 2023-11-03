import { TestBed } from '@angular/core/testing';
import { AngstorageService } from './angstorage.service';

describe('AngstorageService', () => {
  let service: AngstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setCookie', () => {
    it('should set a cookie with the given name and value', () => {
      const cookieName = 'testCookie';
      const cookieValue = 'testValue';
      service.setCookie(cookieName, cookieValue);
      expect(document.cookie).toContain(`${cookieName}=${cookieValue}`);
    });

    it('should set a cookie with the given expiration time', () => {
      const cookieName = 'testCookie';
      const cookieValue = 'testValue';
      const expireTime = 1000;
      service.setCookie(cookieName, cookieValue, expireTime);
      const cookie = document.cookie.match(new RegExp(`${cookieName}=([^;]+)`));
      expect(cookie).toBeTruthy();
      if (cookie) {
        const cookieExpiration = new Date(cookie[1]);
        expect(cookieExpiration.getTime()).toBeGreaterThan(Date.now());
        expect(cookieExpiration.getTime()).toBeLessThanOrEqual(Date.now() + expireTime);
      }
    });
  });

  describe('getCookie', () => {
    it('should return the value of the cookie with the given name', () => {
      const cookieName = 'testCookie';
      const cookieValue = 'testValue';
      document.cookie = `${cookieName}=${cookieValue}`;
      expect(service.getCookie(cookieName)).toBe(cookieValue);
    });

    it('should return null if no cookie with the given name exists', () => {
      const cookieName = 'nonexistentCookie';
      expect(service.getCookie(cookieName)).toBeNull();
    });
  });

  describe('removeCookie', () => {
    it('should remove the cookie with the given name', () => {
      const cookieName = 'testCookie';
      const cookieValue = 'testValue';
      document.cookie = `${cookieName}=${cookieValue}`;
      service.removeCookie(cookieName);
      expect(document.cookie).not.toContain(`${cookieName}=${cookieValue}`);
    });
  });

  describe('removeAllCookie', () => {
    it('should remove all cookies', () => {
      document.cookie = 'cookie1=value1';
      document.cookie = 'cookie2=value2';
      service.removeAllCookie();
      expect(document.cookie).toBe('');
    });
  });

  describe('isCookie', () => {
    it('should return true if a cookie with the given name exists', () => {
      const cookieName = 'testCookie';
      const cookieValue = 'testValue';
      document.cookie = `${cookieName}=${cookieValue}`;
      expect(service.isCookie(cookieName)).toBe(true);
    });

    it('should return false if no cookie with the given name exists', () => {
      const cookieName = 'nonexistentCookie';
      expect(service.isCookie(cookieName)).toBe(false);
    });
  });

  describe('setLocalStorage', () => {
    it('should set an item in local storage with the given name and value', () => {
      const itemName = 'testItem';
      const itemValue = 'testValue';
      service.setLocalStorage(itemName, itemValue);
      expect(localStorage.getItem(itemName)).toBe(itemValue);
    });
  });

  describe('getLocalStorage', () => {
    it('should return the value of the item in local storage with the given name', () => {
      const itemName = 'testItem';
      const itemValue = 'testValue';
      localStorage.setItem(itemName, itemValue);
      expect(service.getLocalStorage(itemName)).toBe(itemValue);
    });

    it('should return null if no item with the given name exists in local storage', () => {
      const itemName = 'nonexistentItem';
      expect(service.getLocalStorage(itemName)).toBeNull();
    });
  });

  describe('removeLocalStorage', () => {
    it('should remove the item in local storage with the given name', () => {
      const itemName = 'testItem';
      const itemValue = 'testValue';
      localStorage.setItem(itemName, itemValue);
      service.removeLocalStorage(itemName);
      expect(localStorage.getItem(itemName)).toBeNull();
    });
  });

  describe('removeAllLocalStorage', () => {
    it('should remove all items from local storage', () => {
      localStorage.setItem('item1', 'value1');
      localStorage.setItem('item2', 'value2');
      service.removeAllLocalStorage();
      expect(localStorage.length).toBe(0);
    });
  });

  describe('isLocalStorage', () => {
    it('should return true if an item with the given name exists in local storage', () => {
      const itemName = 'testItem';
      const itemValue = 'testValue';
      localStorage.setItem(itemName, itemValue);
      expect(service.isLocalStorage(itemName)).toBe(true);
    });

    it('should return false if no item with the given name exists in local storage', () => {
      const itemName = 'nonexistentItem';
      expect(service.isLocalStorage(itemName)).toBe(false);
    });
  });

  describe('setSessionStorage', () => {
    it('should set an item in session storage with the given name and value', () => {
      const itemName = 'testItem';
      const itemValue = 'testValue';
      service.setSessionStorage(itemName, itemValue);
      expect(sessionStorage.getItem(itemName)).toBe(itemValue);
    });
  });
});