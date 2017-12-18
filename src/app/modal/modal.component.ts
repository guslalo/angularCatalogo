import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  /*template:`
    <div id="modal" class="modal">
      <a href="#!" class="modal-action modal-close waves-effect close"><i class="material-icons">&#xE5CD;</i></a>
      <div class="modal-content">
        <div class="row ficha">
          <div class="col s12 m6">
            <div class="img">
              <img class="imgm" src="">
            </div>
          </div>
          <div class="col s12 m6">
            <div class="m marca"></div>
            <div class="m nombre"></div>
        
            <div class="m detalle">
              
            </div>
    
            <div class="boxprecios">   
                <div>
                  <span class="titulo">Precio Normal</span>
                  <span class="m valor dos"></span>
                </div>
                <div>
                  <span class="m titulo">Cliente Entel</span>
                  <span class="m valor ent"></span>
                </div>
              </div>
              <p class="titulo">Equipos compatibles:</p>
              <div class="carouselbox"></div>    
          </div>
        </div>
      </div> 
    </div>`,*/
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
