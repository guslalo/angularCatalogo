import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Equipo } from './models/equipos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../sass/materialize.scss'],
  
})
//var activo : boolean;
export class AppComponent  {
  equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/'; 
  proveedoresApi = 'https://manager.rinnolab.cl/catalogue/api/provider/';//la url a consumir
  title = 'app';
  equiposActivos : any;
  equipos: Array<Equipo>;
  proveedores : any;
  proveedor:any;
   
  ngOnInit() {  
   /* for (let i in this.equipos) {
      console.log(i);
    }*/ 
  };
  constructor(private http:Http){
    this.http.get(this.equiposApi).subscribe(respuesta => this.equipos = respuesta.json().results);
    this.http.get(this.proveedoresApi).subscribe(respuesta2 => this.proveedores = respuesta2.json().results);
    //let name = this.proveedores.filter(inv => inv.name);
    //console.log(proveedoresName);
    //var  nombreProveedor = this.proveedores.some(inv => inv.name);
/*for (let i of this.proveedores.name) {
      console.log(i);
    }*/
    //this.ngOnInit();
   // this.getProviders();
  }  
/*
  getProviders(){
     
     this.http.get(this.proveedoresApi).subscribe(respuesta3 => this.proveedores = respuesta3.json().results.name);
     let providers = this.proveedores;
     console.log(providers);
  }

  getProvider(name:string){
    let nameProvider = this.getProviders();
  }*/

  filtroPorEstado(){
    if(this.equipos != null){
      return this.equipos.filter(r => r.is_active == true );
      
    }
    /*if( this.equipos.filter(r => r.provider)== this.proveedores.filter(r => r.id) ){
      return this.proveedores.filter(r => r.name);
     // var proveedor = this.proveedores.filter(r => r.name);
      
    }
    console.log( this.proveedores.filter(r => r.name));*/
  }
  

}
