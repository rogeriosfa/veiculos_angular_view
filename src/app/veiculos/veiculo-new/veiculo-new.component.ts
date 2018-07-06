import { VeiculosService } from './../../core/services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoModel } from '../../core/models/veiculo.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-veiculo-new',
    templateUrl: './veiculo-new.component.html',
    styleUrls: ['./veiculo-new.component.css']
})
export class VeiculoNewComponent implements OnInit {

    public model: VeiculoModel = new VeiculoModel;
    public isBusy: boolean = false;

    constructor(
        private route: Router,
        private veiculosService: VeiculosService,
    ) { }

    ngOnInit() {
    }

    public onSubmit() {
        this.isBusy = true;
        this.veiculosService.postVeiculo(this.model).subscribe(
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
