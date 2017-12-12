import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo, proveedormarca } from './models/equipos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/sass/materialize.scss'],
  
})

//var activo : boolean;
export class AppComponent  {
  
  public equiposUrl:string;
  equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/'; 
  proveedoresApi = 'https://manager.rinnolab.cl/catalogue/api/provider/';//la url a consumir
  //equiposActivos : Array<equipoActivo>;
  equipos: Array<Equipo>;
  marcaproveedor:Array<proveedormarca>;
   
  ngOnInit() {  
   
  };
  constructor(private http:Http){

    this.http.get(this.equiposApi).subscribe(resp => this.equipos = resp.json().results);
    this.http.get(this.proveedoresApi).subscribe(resp2 => this.marcaproveedor = resp2.json().results);
    
  }  
  getEquipos(){
    //return this.http.get(this.equiposUrl).subscribe(Response => this.equipos = Response.json().results);
  }

  filtroPorEstado(){
    if(this.equipos != null){
      return this.equipos.filter(r => r.is_active == true );
    };
    //console.log( this.proveedores.filter(r => r.name));*/
  }

  filtroPorMarca(id){
    if(this.marcaproveedor != null){
      return this.marcaproveedor.filter(r => r.id == id );
    };
    //console.log( this.proveedores.filter(r => r.name));*/
  }
  

}
