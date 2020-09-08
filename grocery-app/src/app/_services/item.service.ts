import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JPA_API_URL } from '../app.constant';
import { map } from 'rxjs/operators';

import { Item } from '@app/_models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ItemService {

    constructor(
        private router: Router,
        private http: HttpClient
    ){ }

    getAll(){
        return this.http.get<Item[]>(`${JPA_API_URL}/items`);
    }

    createItem(item: Item) {
        console.info('item ', item)
        return this.http.post(`${JPA_API_URL}/item`, item);
    }

    updateItem(id, params) {
        return this.http.put(`${JPA_API_URL}/item/${id}`, params);
        
    }

    deleteItem(id: string) {
        return this.http.delete(`${JPA_API_URL}/item/${id}`);        
    }

}