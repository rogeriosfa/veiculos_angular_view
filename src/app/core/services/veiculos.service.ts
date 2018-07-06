import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { VeiculoModel } from '../models/veiculo.model';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VeiculosService {
    public url = "http://localhost:8000/api/veiculos";

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }


    public getVeiculos(): Observable<VeiculoModel[]> {
        return this.http.get<VeiculoModel[]>(this.url)
            .pipe(
                tap(veiculos => this.log(`fetched veiculos`)),
                catchError(this.handleError('get', []))
            );
    }

    public getVeiculoId(id: number): Observable<VeiculoModel> {
        const url = `${this.url}/${id}`;
        return this.http.get<VeiculoModel>(url).pipe(
            tap(_ => this.log(`fetched veículo id=${id}`)),
            catchError(this.handleError<VeiculoModel>(`getVeiculo id=${id}`))
        );
    }

    searchVeiculos(term: string = ''): Observable<VeiculoModel[]> {
        //if (!term.trim()) {
            // if not search term, return empty hero array.
            //return of([]);
        //}
        return this.http.get<VeiculoModel[]>(`${this.url}/find?q=${term}`).pipe(
            tap(_ => this.log(`found veiculos matching "${term}"`)),
            catchError(this.handleError<VeiculoModel[]>('searchVeiculos', []))
        );
    }

    public postVeiculo(veic: VeiculoModel): Observable<VeiculoModel> {
        return this.http.post<VeiculoModel>(this.url, veic, httpOptions).pipe(
            tap((result: VeiculoModel) => this.log(`veiculo adicionado w/ id=${result.id}`)),
            catchError(this.handleError<VeiculoModel>('add veiculo'))
        );
    }

    public putVeiculo(model: VeiculoModel): Observable<any> {
        const url = `${this.url}/${model.id}`;
        return this.http.put(url + '', model, httpOptions).pipe(
            tap(_ => this.log(`updated veiculo id=${model.id}`)),
            catchError(this.handleError<any>('updateVeiculo'))
        );
    }

    public deleteVeiculo(model: VeiculoModel | number): Observable<VeiculoModel> {
        const id = typeof model === 'number' ? model : model.id;
        const url = `${this.url}/${id}`;

        return this.http.delete<VeiculoModel>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted veículo id=${id}`)),
            catchError(this.handleError<VeiculoModel>('deleteVeículo'))
        );
    }


    private log(message: string) {
        this.messageService.add('Service: ' + message);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }


}
