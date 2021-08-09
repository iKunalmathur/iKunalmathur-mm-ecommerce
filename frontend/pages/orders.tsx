/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../Components/Layout";

export default function orders() {
  return (
    <Layout>
      <br />
      <div className="container vh-100">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">
                  Product Name{" "}
                  <Link href="">
                    <a className="link-primary">
                      <i
                        className="fas fa-external-link-alt"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Link>
                </h6>
                <p className="mb-0 opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur, id.
                </p>
                <div className="d-flex gap-2">
                  <p className="text-primary fw-bold">Total Quantity : 1</p>
                  <p className="text-success fw-bold">Total Price : $ 94</p>
                </div>
              </div>
              <small className="opacity-50 text-nowrap">
                Expected Delivery : 24 Aug 2021
              </small>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
