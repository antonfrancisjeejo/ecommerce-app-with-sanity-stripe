import Link from "next/link";
import React, { FC } from "react";
import { urlFor } from "../lib/client";
import { ProductType } from "../typings";

interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-cart">
          <img
            src={urlFor(image[0]).url()}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
