import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../core/services/veiculos.service';

@Component({
    selector: 'app-veiculos',
    templateUrl: './veiculos.component.html',
    styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

    constructor(
        private veiculosService: VeiculosService,
    ) { }

    ngOnInit() {
        this.getTodosVeiculos();
    }

    public getTodosVeiculos() {
        this.veiculosService.getVeiculos().subscribe(
            result => {
                console.log(result);
            },
            erro => {
                console.log(erro);
            }
        )
    }

}
