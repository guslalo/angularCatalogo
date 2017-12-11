export class AppComponenta  {
    /*equiposApi = 'https://manager.rinnolab.cl/catalogue/api/equipment/'; 
    proveedoresApi = 'https://manager.rinnolab.cl/catalogue/api/provider/';//la url a consumir
    constructor(private http:Http){
        this.http.get(this.equiposApi).subscribe(respuesta => this.equipos = respuesta.json().results);
        this.http.get(this.proveedoresApi).subscribe(respuesta2 => this.proveedores = respuesta2.json().results);
    }*/
}
export class equipoActivo {
    id: number;
    marca:string;
    modelo:string;
    main_image_resolutions: MainImageResolutions;
    colores: Color[];
    precioInicial:number;
    compatible_accessories: number[];
    is_active: boolean;
}


export class Links {
    next?: any;
    previous?: any;
}

export class ProductType {
    id: number;
    created: Date;
    modified: Date;
    name: string;
}

export class Color {
    id: number;
    name: string;
    color: string;
    equipment: number;
}

export class MainImageResolutions {
    main_image_256: string;
    main_image_32: string;
    main_image_64: string;
    main_image_128: string;
    main_image_512: string;
    main_image_16: string;
    main_image_24: string;
}

export class Equipo {
    id: number;
    product_type: ProductType;
    colors: Color[];
    compatible_accessories: number[];
    main_image_resolutions: MainImageResolutions;
    name: string;
    is_active: boolean;
    main_image: string;
    cover_image?: any;
    created: Date;
    modified: Date;
    processor: string;
    description: string;
    screen: string;
    frontal_camera: string;
    rear_camera: string;
    network: string;
    size: string;
    polymorphic_ctype: number;
    organization: number;
    sticker?: number;
    provider: number;
    background_color?: any;
    orientation?: any;
}

export class RootObject {
    links: Links;
    count: number;
    results: Equipo[];
    pages: number;
}
    
   