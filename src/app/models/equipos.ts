
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
    colors: color[];
    colorEquipo:string;
    compatible_accessories: number[];
    main_image_resolutions: MainImageResolutions;
    name: string;
    is_active: boolean;
    main_image: string;
    cover_image?: any;
    processor: string;
    description: string;
    screen: string;
    frontal_camera: string;
    rear_camera: string;
    network: string;
    size: string;
    polymorphic_ctype: number;
    organization: number;
    sticker: number;
    logoRed:any;
    provider: providerA;
    background_color: any;
    precio:number;
    customer_price:any;
    sale_price:number;
    imagered:any;
    equipment_details:equipment_details[];
}


export class equipment_details {
    sale_price:number;
}

export class providerA {
    name:string;
    id:number;
    logo:string;
}


export class detalleEquipo {
    equipment:number;
    sale_price:number;
}




export class color {
    id: number;
    name: string;
    color: string;
    equipment: number;
}
 