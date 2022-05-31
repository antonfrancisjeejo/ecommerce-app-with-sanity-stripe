import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
import { ProductType, BannerType } from "../typings";

interface Props {
  products: [ProductType];
  bannerData: [BannerType];
}

const Home: FC<Props> = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product: ProductType) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
