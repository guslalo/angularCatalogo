import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo, proveedormarca, detalleEquipo, stickerm, color } from './../models/equipos';

@Injectable()
export class GeneralService {
  equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/'; 
  proveedoresApi = 'https://manager.rinnolab.cl/catalogue/api/provider/';
  detealleEquipoApi = "https://manager.rinnolab.cl/catalogue/api/equipmentdetail/";
  stickerApi = "https://manager.rinnolab.cl/catalogue/api/sticker/";
  equipos: Array<Equipo>;
  equipos2: Array<Equipo>;
  equiposActivos: Array<Equipo>;
  equipoDetalle:Array<detalleEquipo>;
  stickerm:Array<stickerm>;
  marcaproveedor:Array<proveedormarca>;
  equipoProveedorId:number;
  proveedorId:number;
  coloresEquipo:Array<color>;
  proveedoresActivos: Array<proveedormarca>;

  constructor(private http:Http) { 
    this.getEquipos();
    this.getProveedor();
    this.getEquipoDetalle();
  }
  getEquipos2(){
    this.http.get(this.equiposApi).subscribe((resp) =>{    this.equipos2 = resp.json().results;  });
    }

  getEquipos(){
    this.http.get(this.equiposApi).subscribe((resp) =>{    
      this.equipos = resp.json().results; 
      this.equiposActivos = this.equipos.filter(r => r.is_active == true);  
     
        for (let item of this.equiposActivos){
          
          /*var objetocolor = item.colors;
          for (let item of objetocolor){
            console.log(item.name)
            item.color = item.name;
          }*/
          
          /*var color:Array<color> = this.coloresEquipo.filter(c => c.equipment == item.id);
          item.colorEquipo = color[0].color;*/

         
          //compara id de provider en equipiactivo y id en proveedores
           var marca:Array<proveedormarca> = this.marcaproveedor.filter(m => m.id == item.provider);
           item.providerName = marca[0].name;
         
          
            //trae precio prepago equipo
            var equipoDetalle:Array<detalleEquipo> = this.equipoDetalle.filter(me => me.equipment == item.id);
            item.precio = equipoDetalle[0].sale_price;

           /* var stickerm:Array<stickerm> = this.stickerm.filter(ms => ms.id == item.sticker);   
            item.logoRed = stickerm[0].image;*/
  
        };
    });
    
  }
 
 

  //Trae detalle equipo
  getEquipoDetalle(){
    this.http.get(this.detealleEquipoApi).subscribe((resp2) =>{ 
      this.equipoDetalle = resp2.json().results; 
    });
  }

  getSticker(){
    this.http.get(this.stickerApi).subscribe((resp) =>{ 
      this.stickerm = resp.json().results;
     /* for (let item of this.stickersa){ 
        console.log(item);
      }*/
    });
  }
  //Traer proveedor
  getProveedor(){
    this.http.get(this.proveedoresApi).subscribe((resp2) =>{ 
      this.marcaproveedor = resp2.json().results;    
    });
  }/**/


}
