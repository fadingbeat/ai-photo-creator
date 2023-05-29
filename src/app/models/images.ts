export interface ImagesInfo {
    data: ImgObject;
}

export interface ImgObject {
    created: number;
    data: ImgData[];
}

export interface ImgData {
    url: string;
}
