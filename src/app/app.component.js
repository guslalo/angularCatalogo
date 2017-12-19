"use strict";var __decorate=this&&this.__decorate||function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),general_service_1=require("./services/general.service"),AppComponent=function(){function e(e){this.http=e,this.equiposApi="https://manager.rinnolab.cl/catalogue/api/equipment/",this.proveedoresApi="https://manager.rinnolab.cl/catalogue/api/provider/",this.detealleEquipoApi="https://manager.rinnolab.cl/catalogue/api/equipmentdetail/",this.stickerApi="https://manager.rinnolab.cl/catalogue/api/sticker/",this.getEquipos(),this.getProveedor(),this.getEquipoDetalle(),this.getSticker()}return e.prototype.ngOnInit=function(){},e.prototype.getEquipos=function(){var e=this;this.http.get(this.equiposApi).subscribe(function(t){e.equipos=t.json().results,e.equiposActivos=e.equipos.filter(function(e){return 1==e.is_active});for(var i,r,o=function(t){i=e.marcaproveedor.filter(function(e){return e.id==t.provider}),t.providerName=i[0].name,r=e.equipoDetalle.filter(function(e){return e.equipment==t.id}),t.precio=r[0].sale_price},s=0,n=e.equiposActivos;s<n.length;s++){o(n[s])}})},e.prototype.obtenerId=function(e){console.log(e),this.equipoId=this.equipos.filter(function(t){return t.id==e})},e.prototype.getEquipoDetalle=function(){var e=this;this.http.get(this.detealleEquipoApi).subscribe(function(t){e.equipoDetalle=t.json().results})},e.prototype.getSticker=function(){var e=this;this.http.get(this.stickerApi).subscribe(function(t){e.stickerm=t.json().results})},e.prototype.getProveedor=function(){var e=this;this.http.get(this.proveedoresApi).subscribe(function(t){e.marcaproveedor=t.json().results})},e=__decorate([core_1.Component({selector:"app-root",templateUrl:"./app.component.html",styleUrls:["./../assets/sass/materialize.scss"],providers:[general_service_1.GeneralService]})],e)}();exports.AppComponent=AppComponent;