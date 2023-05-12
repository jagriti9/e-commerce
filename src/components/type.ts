export type cartData = {
    imageUrl: string;
    price?: number;
    description?: string;
    parent_id?: number;
    category_id?: number;
    name?: string;
    product_id?: string|number;
    quantity: number;
    totalPrice: number;
  };

  export type wishlistData ={
    imageUrl?: string
    price?: number;
    description?: string;
    parent_id?: number;
    category_id?: number;
    name?: string;
    product_id?: string|number;  
  }