
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
    proveedormarca: proveedormarca;
}

export class proveedormarca {
    name: string;
    id:number;
}

   