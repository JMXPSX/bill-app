import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JPA_API_URL } from '../app.constant';
import { Bill } from '@app/_models';

@Injectable({
    providedIn: 'root'
  })
export class BillService {

    constructor(
        private router: Router,
        private http: HttpClient
    ){ }

    getAll(){
        return this.http.get<Bill[]>(`${JPA_API_URL}/bills`);
    }

    createBill(bill: Bill) {
        console.info('bill ', bill)
        return this.http.post(`${JPA_API_URL}/bill`, bill);
    }

    updateBill(id, params) {
        return this.http.put(`${JPA_API_URL}/bill/${id}`, params);
        
    }

    deleteBill(id: string) {
        return this.http.delete(`${JPA_API_URL}/bill/${id}`);        
    }

}