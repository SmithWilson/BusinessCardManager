import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LocalStorageService
{
    public setAuthUser(user: any, isObject: boolean)
    {
        this.setDefault('authUser', user, isObject);
    }

    public getAuthUser(isObject: boolean)
    {
        return this.getDefault('authUser', isObject);
    }

    public setAuthToken(user: any, isObject: boolean)
    {
        this.setDefault('authToken', user, isObject);
    }

    public getAuthToken(isObject: boolean)
    {
        return this.getDefault('authToken', isObject);
    }

    public setDefault(key: string, value: any, isObject: boolean)
    {
        if (isObject)
        {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else
        {
            localStorage.setItem(key, value);
        }
    }

    public getDefault(key: string, isObject: boolean)
    {
        if (isObject)
        {
            const value = localStorage.getItem(key);
            return JSON.parse(value);
        }
        else
        {
            return localStorage.getItem(key);
        }
    }

    public removeDefault(key: string)
    {
        localStorage.removeItem(key);
    }

}