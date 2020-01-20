import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/app/enviroments';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class CrudService
{
    constructor (
        private http: HttpClient,
        private authService: AuthService) {}

    private setHeaders(): HttpHeaders 
    {
        const headersConfig: any = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': ''
        };

        const authHeader = this.authService.getAuthHeader();
        if (authHeader) 
        {
            headersConfig.Authorization = authHeader;
        }

        return new HttpHeaders(headersConfig);
    }

    get<T>(path: string): Observable<any> 
    {
        return this.http.get<T>(`${ environment.api_url }${ path }`, {headers: this.setHeaders()});
    }

    put(path: string, body: Record<string, any> = {}): Observable<any> 
    {
        return this.http.put<any>(`${ environment.api_url }${ path }`, JSON.stringify(body), {headers: this.setHeaders()});
    }

    delete(path): Observable<any> 
    {
        return this.http.delete(`${ environment.api_url }${ path }`, {headers: this.setHeaders()});
    }

    deleteWithBody(path, body: Record<string, any> = {}): Observable<any> 
    {
        return this.http.request('DELETE',`${ environment.api_url }${ path }`, {
            headers: this.setHeaders(), 
            body: JSON.stringify(body)
        });
    }

    post(path: string, body: Record<string, any> = {}): Observable<any> 
    {
        return this.http.post<any>(`${ environment.api_url }${ path }`, JSON.stringify(body), {headers: this.setHeaders()});
    }
}