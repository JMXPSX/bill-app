import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Clerk } from '@app/_models';
import { JPA_API_URL } from '../app.constant';

@Injectable({
    providedIn: 'root'
  })
export class ClerkService {

    constructor(
        private router: Router,
        private http: HttpClient
    ){ }

    getAll(){
        return this.http.get<Clerk[]>(`${JPA_API_URL}/clerks`);
    }

    createClerk(clerk: Clerk) {
        console.info('clerk ', clerk)
        return this.http.post(`${JPA_API_URL}/clerk`, clerk);
    }

    updateClerk(id, params) {
        return this.http.put(`${JPA_API_URL}/clerk/${id}`, params);
        
    }

    deleteClerk(id: string) {
        return this.http.delete(`${JPA_API_URL}/clerk/${id}`);        
    }

}