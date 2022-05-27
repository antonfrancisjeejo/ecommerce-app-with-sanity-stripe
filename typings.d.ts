export interface ImageType {
  asset: {
    url: string;
  };
}

export interface ProductType {
  _id: string;
  _createdAt: string;
  name: string;
  price: number;
  image: Array<ImageType>;
  slug: {
    current: string;
  };
  details: string;
}

export interface BannerType {
  _id: string;
  _createdAt: string;
  image: ImageType;
  buttonText: string;
  desc: string;
  discount: string;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}

export interface CartType {
  _id: string;
  _createdAt: string;
  name: string;
  price: number;
  image: Array<ImageType>;
  slug: {
    current: string;
  };
  details: string;
  quantity: number;
}
