import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoEditComponent } from './veiculos/veiculo-edit/veiculo-edit.component';
import { VeiculoNewComponent } from './veiculos/veiculo-new/veiculo-new.component';
import { VeiculosService } from './core/services/veiculos.service';

@NgModule({
    declarations: [
        AppComponent,
        VeiculosComponent,
        VeiculoEditComponent,
        VeiculoNewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        VeiculosService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
