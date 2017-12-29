import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo, detalleEquipo } from './models/equipos';
import { proveedor } from './models/proveedores';
// import { GeneralService } from './services/general.service';
// import * as $ from 'jquery/dist/jquery.min.js';
declare var $:any; // declaramos variable jquery


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/sass/materialize.scss'],
  // providers:[GeneralService]
})


export class AppComponent  {
  equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/';
  detealleEquipoApi = 'https://manager.rinnolab.cl/catalogue/api/equipmentdetail/' ;
  equipos: Array<Equipo>;
  equiposActivos: Array<Equipo>;
  salePrice: Array<Equipo>;
  equipoId: Array<Equipo>;
  //getOneProvider:Array<providerA>;
  proveedor:Array<any>;
  idprovider:any;
  equipoDetalle:Array<detalleEquipo>;
  textoduro:string;
  proveedorUnico:any;
  //firstSalePrice: Array<Equipo>;

  // marcaproveedor:Array<proveedormarca>;
  // equipoProveedorId:number;
  // getProveedor:any;
  // coloresEquipo:Array<color>;
  // proveedorId:number;
  // proveedoresActivos: Array<proveedormarca>;

  ngOnInit() {

  };

  constructor(private http: Http, ){ // servicio:GeneralService
    this.getEquipos();
    // this.getProveedor();
    this.getEquipoDetalle();
    //this.firstSalePrice();
    this.textoduro = '{{color.name}}';
    // this.getSticker();
  }

  /*get firstSalePrice() {
    
    return this.equipo.equipment_details[0].sale_price || 0;
  }*/
  // Traer equipos
  getEquipos(){
    this.http.get(this.equiposApi).subscribe((resp) =>{
      this.equipos = resp.json().results;
      this.equiposActivos = this.equipos.filter(r => r.is_active === true);
      
      
      
      //this.proveedor = this.equipos.filter(r => r.provider);

        for (let item of this.equiposActivos){
   
          this.proveedorUnico = item.provider.id;
          //console.log(this.proveedorUnico);
          var newP = this.proveedorUnico;

          for (let item2 of newP){
              console.log(item2);
           
          }
        

          /*for (let item2 of item.equipment_details){
             if (item2.sale_price < item2.sale_price){
                console.log(item2.sale_price);
             }
          }*/
            /*var equipoDetalle:Array<detalleEquipo> = this.equipoDetalle.filter(me => me.equipment == item.id);
            item.precio = equipoDetalle[0].sale_price;*/

          // compara id de provider en equipiactivo y id en proveedores
          /*var marca:Array<proveedormarca> = this.marcaproveedor.filter(m => m.id == item.provider);
          item.providerName = marca[0].name;*/

          // trae precio prepago equipo
            /*var equipoDetalle:Array<detalleEquipo> = this.equipoDetalle.filter(me => me.equipment == item.id);
            item.precio = equipoDetalle[0].sale_price;*/

        };

    });
  }
 
  obtenerId(idSeleccionado){
    this.equipoId = this.equipos.filter(r => r.id === idSeleccionado);
  }

  // Trae detalle equipo
  getEquipoDetalle(){
    this.http.get(this.detealleEquipoApi).subscribe((resp2) =>{
      this.equipoDetalle = resp2.json().results;
    });
  }

}
