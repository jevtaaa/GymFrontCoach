import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SessionService } from '../session.service';
import { Client } from '../models/client.model';

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    clients: Client[] = [];

    constructor(private http: HttpClient, private router: Router, public authServ: AuthService, private session: SessionService) {

    }

    getAllClients() {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
        }
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: this.authServ.token,
        })};
        return this.http.get(this.session.ngrok+'/clients', httpOptions);
    }

    removeTraining(client_id: number, training_id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
        }
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: this.authServ.token,
        })};
        const httpBody = {
            "client_id": client_id,
            "training_id": training_id
        };

        return this.http.put(this.session.ngrok+'/clients/update-client-training', httpBody, httpOptions);
    }

    addTraining(client_id: number, training_id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
        }
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: this.authServ.token,
        })};
        const httpBody = {
            "client_id": client_id,
            "training_id": training_id
        };

        return this.http.put(this.session.ngrok+'/clients/update-client-training', httpBody, httpOptions);
    }

    getClients() {
        return this.clients;
    }
}