import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo, proveedormarca, detalleEquipo, stickerm, color } from './models/equipos';
@Injectable()
export class GeneralService {
  //coloresEquipo:Array<color>;
  coloresEquipo:Array<color>;

  constructor(private http:Http) { 
    this.getcoloresEquipos(); 
  }
 /* getcoloresEquipos(){
    this.http.get("https://manager.rinnolab.cl/catalogue/api/colorequipament/").subscribe((resp2) =>{ 
      this.coloresEquipo = resp2.json().results;   
    });
  }*/
  getcoloresEquipos(){
    this.http.get("https://manager.rinnolab.cl/catalogue/api/colorequipament/").subscribe((resp2) =>{ 
      this.coloresEquipo = resp2.json().results;  
       
    });
  }

}
