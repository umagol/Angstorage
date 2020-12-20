
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SampletestService {

    constructor() { }

    setLocalStorageWithExpiry(key: string, value: string, ttl: any): any {
        const now = new Date()
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }



    getLocalStorageWithExpiry(key: any) {
        const itemStr = localStorage.getItem(key)
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value
    }

    setSessionStorageWithExpiry(key: string, value: string, ttl: any): any {
        const now = new Date()
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        sessionStorage.setItem(key, JSON.stringify(item))
    }



    getSessionStorageWithExpiry(key: any) {
        const itemStr = sessionStorage.getItem(key)
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            sessionStorage.removeItem(key);
            console.log("workign");
            return null;
        }
        return item.value
    }




}