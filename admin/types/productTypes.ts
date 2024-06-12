interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // Assuming date string format for now
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string; // Assuming date string format for now
  updatedAt: string; // Assuming date string format for now
  barcode: string;
  qrCode: string;
}

interface Product {
  _id: {
    $oid: string;
  };
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export default Product;
