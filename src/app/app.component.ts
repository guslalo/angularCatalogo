import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo, proveedormarca } from './models/equipos';
declare var $:any;//declaramos variable jquery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/sass/materialize.scss'],
  
})

export class AppComponent  {
  
  public equiposUrl:string;
  equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/'; 
  proveedoresApi = 'https://manager.rinnolab.cl/catalogue/api/provider/';//la url a consumir
  equipos: Array<Equipo>;
  equiposActivos: Array<Equipo>;
  marcaproveedor:Array<proveedormarca>;
  todalaInfo = new Array();
  equipoProveedorId:number;
  proveedorId:number;

   
  ngOnInit() {  

  };
  constructor(private http:Http){
      this.getEquipos();
      this.getProveedor();

     
  } 
  
  compareId(){

 
  }

  //Traer equipos
  getEquipos(){
    this.http.get(this.equiposApi).subscribe((resp) =>{    
      this.equipos = resp.json().results; 
      this.equiposActivos = this.equipos.filter(r => r.is_active == true);
      
        for (let item of this.equiposActivos){
           var marca:Array<proveedormarca> = this.marcaproveedor.filter(m => m.id == item.provider);
          /*for(var i = 0; i < marca.length; i++){
            item.providerName = marca[i].name;
          }*/

           item.providerName = marca[0].name;
           console.log(marca);


        };
    });
  }

  //Traer proveedor
  getProveedor(){
    this.http.get(this.proveedoresApi).subscribe((resp2) =>{ 
      this.marcaproveedor = resp2.json().results; 
      
    });
  }

  
  filtroPorEstado(){
    if(this.equipos != null){
      return this.equipos.filter(r => r.is_active == true );
    };
  }

  

}
