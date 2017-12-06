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
   
  ngOnInit() {  
   /* for (let i in this.equipos) {
      console.log(i);
    }*/ 
  };
  constructor(private http:Http){
    this.http.get(this.equiposApi).subscribe(respuesta => this.equipos = respuesta.json().results);
    this.http.get(this.proveedoresApi).subscribe(respuesta => this.proveedores = respuesta.json().results);
    //this.ngOnInit();
  }  




  filtroPorEstado(){
    if(this.equipos != null){
      return this.equipos.filter(r => r.is_active == true );
      
    }
  }
  

}
