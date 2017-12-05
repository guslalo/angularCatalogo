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
  urlApi = 'http://192.168.1.215/catalogue/api/equipment/'; //la url a consumir
  title = 'app';
  equiposActivos : any;
  equipos: Array<Equipo>;
   
  ngOnInit() {  
   /* for (let i in this.equipos) {
      console.log(i);
    }*/ 
  };
  constructor(private http:Http){
    this.http.get(this.urlApi).subscribe(respuesta => this.equipos = respuesta.json().results);
    
    //this.ngOnInit();
  }  




  filtroPorEstado(){
    if(this.equipos != null){
      return this.equipos.filter(r => r.is_active == true);
    }
  }
  

}
