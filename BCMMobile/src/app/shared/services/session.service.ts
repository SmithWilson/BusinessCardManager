import {Injectable} from '@angular/core';
import {LocalStorageService} from './localStorage.service';

@Injectable({
    providedIn: 'root'
})
export class SessionService 
{
    constructor (
        private localStorageService: LocalStorageService) 
    {
    }

    public getAuthUser(): any 
    {
        return this.localStorageService.getAuthUser(true);
    }

    public setAuthUser(user: any) 
    {
        this.localStorageService.setAuthUser(user, true);
    }

    public getToken()
    {
        return this.localStorageService.getAuthToken(false);
    }

    public setToken(token: string) 
    {
        this.localStorageService.setAuthToken(token, false);
    }

    public removeAuth(){
        this.localStorageService.removeDefault('authUser');
        this.localStorageService.removeDefault('authToken');
    }
}
