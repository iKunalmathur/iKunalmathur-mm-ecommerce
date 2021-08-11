/* eslint-disable @next/next/no-img-element */
import Hero from "../Components/Hero";
import { GetStaticProps } from "next";
import { server } from "../config";
import Layout from "../Components/Layout";
import axios from "axios";

export const getStaticProps: GetStaticProps = async (context) => {
  const items: Object[] = await axios
    .get(`${server}/api/products`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  if (!items) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      items,
    },
  };
};

interface HomeProps {
  items: Object[];
  addItemToCart: any;
}

export default function Home({ items, addItemToCart }: HomeProps) {
  return (
    <Layout>
      <Hero />
      <br />
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
          {items &&
            items.map((p: any, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm p-3">
                  <img
                    src={p.image ?? "/cover-3.jpg"}
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-text">{p.name}</h5>
                    <p className="card-text text-muted">{p.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => addItemToCart(p)}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <h4 className="text-success">${p.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
