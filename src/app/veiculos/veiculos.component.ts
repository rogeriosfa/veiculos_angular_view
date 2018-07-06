import { VeiculoModel } from '../core/models/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../core/services/veiculos.service';

@Component({
    selector: 'app-veiculos',
    templateUrl: './veiculos.component.html',
    styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

    public veiculos: VeiculoModel[] = [];
    public isBusy: boolean = false;
    public erro: boolean = false;
    public params: string;

    constructor(
        private veiculosService: VeiculosService,
    ) { }

    ngOnInit() {
        this.getTodosVeiculos();
    }

    public getTodosVeiculos() {
        this.isBusy = true;
        this.veiculosService.getVeiculos().subscribe(
            result => {
                this.isBusy = false;
                this.veiculos = result;
                //console.log(result);
            },
            erro => {
                this.isBusy = false;
                //console.log(erro);
            }
        )
    }

    public deleteVeiculo(id: number) {
        var result = confirm("Deseja realmente remover este veículo?");
        if (result) {
            this.isBusy = true;
            this.veiculosService.deleteVeiculo(id).subscribe(
                result => {
                    console.log(result);
                    this.isBusy = false;
                    this.getTodosVeiculos();
                },
                erro => {
                    this.isBusy = false;
                }
            )
        }
    }

    public searchVeiculos() {
        this.isBusy = true;
        this.veiculosService.searchVeiculos(this.params).subscribe(
            result => {
                this.veiculos = result;
                this.isBusy = false;
            },
            erro => {
                this.isBusy = false;
            }
        )
    }

}
