import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from './session.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthService
{
    private readonly user;
    private readonly token;
    constructor (
        private sessionService: SessionService
    ) 
    {
        this.user = sessionService.getAuthUser();
        this.token = sessionService.getToken();
    }

    getUserData() 
    {
        return this.user;
    }

    setUserData(user){
        this.sessionService.setAuthUser(user);
    }

    getToken(){
        return this.sessionService.getToken();
    }

    setToken(token: string){
        this.sessionService.setToken(token);
    }

    getFirstName(): string | null 
    {
        return this.user.firstName || null;
    }

    getAuthHeader() 
    {
        if (this.user && this.token) 
        {
            return 'Bearer ' + this.token;
        }
        else 
        {
            return null;
        }
    }
}