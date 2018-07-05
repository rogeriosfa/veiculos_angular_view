import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Veiculos } from '../models/veiculos';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VeiculosService {
    public path = "http://localhost:8000/api/veiculos";

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }


    getVeiculos(): Observable<Veiculos[]> {
        return this.http.get<Veiculos[]>(this.path)
            .pipe(
                tap(heroes => this.log(`fetched veiculos`)),
                catchError(this.handleError('getHeroes', []))
            );
    }

    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            //console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }


}
