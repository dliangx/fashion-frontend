export type ProductInfo = {
    id: number,
    name: string,
    category: string,
    pic: string,
    brand: string,
    rating: number,
    price: number;
}

export type CollectionInfo = {
    id: number,
    pic: string,
    name: string,
}

export type ImageSlide = {
    src: string;
    alt: string;
}
  
export type Page = {
    start:number;
    num:number;
}

export type CollectionDetailInfo = {
    collection: CollectionInfo;
    products: ProductInfo[];
    
}