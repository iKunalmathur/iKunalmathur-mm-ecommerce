/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";

export default function cart() {
  const [totalPrice, setTotalPrice] = useState<number>();
  const [quntity, setQuntity] = useState<number>(1);
  const [discount, setDiscount] = useState<number>(5);

  const price = 99;

  // cal total price
  function computePrice(qty: any) {
    setQuntity(qty);
    setTotalPrice(price * qty - discount);
  }

  useEffect(() => {
    computePrice(1);
  }, []);

  return (
    <Layout>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
            <h2>Checkout form</h2>
            <p className="lead">Fill Your Details And Place Order</p>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{quntity}</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$99</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="">
                    <h6 className="my-0">Quantity</h6>
                    <small className="text-muted">Min 1 Max 10</small>
                  </div>
                  <div className="">
                    <input
                      className="form-control"
                      type="number"
                      name="quantity"
                      value={quntity}
                      onChange={(e) => computePrice(e.target.value)}
                      min={1}
                      max={10}
                    />
                  </div>
                  {/* <span className="text-success">−$5</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>141SOLO</small>
                  </div>
                  <span className="text-success">−${discount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${totalPrice}</strong>
                </li>
              </ul>

              {/* <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </form> */}
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="+91 98XXXXXX"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid phone for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                    checked
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                    checked
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Cash On Delivery
                  </label>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
