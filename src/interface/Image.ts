export type ImageType = {
    url: string;
    type: string;
};


export interface ImagenOriginal {
    imgName: string;
    alt: string;
    type: string[];
    imagen: ImageType[];
  }