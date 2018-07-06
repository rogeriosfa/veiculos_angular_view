import { Component, OnInit } from '@angular/core';
import { VeiculoModel } from '../../core/models/veiculo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VeiculosService } from '../../core/services/veiculos.service';

@Component({
    selector: 'app-veiculo-edit',
    templateUrl: './veiculo-edit.component.html',
    styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {

    public model: VeiculoModel = new VeiculoModel;
    public isBusy: boolean = false;

    constructor(
        private route: Router,
        private activeRoute: ActivatedRoute,
        private veiculosService: VeiculosService,
    ) { }

    ngOnInit() {
        this.getVeiculo(this.activeRoute.snapshot.params['id']);
    }

    public getVeiculo(id: number) {
        this.isBusy = true;
        this.veiculosService.getVeiculoId(id).subscribe(
            result => {
                this.isBusy = false;
                this.model = result;
            },
            erro => {
                this.isBusy = false;
                alert('Veiculo não encontrado!');
            }
        )
    }

    public onSubmit() {
        this.isBusy = true;
        this.veiculosService.putVeiculo(this.model).subscribe(
            result => {
                this.isBusy = false;
                this.route.navigate(['../']);
            },
            erro => {
                this.isBusy = false;
                alert('Um erro aconteceu!');
            }
        )
    }

}
