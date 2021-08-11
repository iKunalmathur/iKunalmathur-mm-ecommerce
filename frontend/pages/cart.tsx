/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../Components/Layout";
import { server } from "../config";
import { postData } from "../services/handleApi";
import { CartContext } from "./_app";

type Inputs = {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
};

interface CartProps {
  setCartItems: any;
}

export default function cart({ setCartItems }: CartProps) {
  const items = useContext(CartContext);
  const router = useRouter();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quntity, setQuntity] = useState<number>(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const authCheck = true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Calculate Total Price
  function calTotalPrice(items: any) {
    items.forEach((i: any) => {
      setTotalPrice(
        (totalPrice) => Math.round((totalPrice + i.price) * 1e12) / 1e12
      );
    });
  }

  // Handle Form Submit
  const onSubmit: SubmitHandler<Inputs> = async (customer) => {
    customer.id = 19;

    // create order for each items

    let orders: Object[] = [];

    items.forEach((i: any) => {
      orders.push({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        price: i.price,
        productId: i.id,
        userId: customer.id,
      });
    });

    // console.log("orders", orders);

    // Place Orders
    let config: any = {
      method: "post",
      url: `/api/placeorder`,
      headers: {
        "Content-Type": "application/json",
      },
      data: orders,
    };

    await axios(config)
      .then((res) => {
        setOrderPlaced(true);
        setCartItems([]);
        setTotalPrice(0);
      })
      .catch(function (error) {
        alert("Woops, Somthing Went Wrong");
        console.log(error);
      });
  };

  useEffect(() => {
    if (!authCheck) {
      router.push("/login");
    }

    setQuntity(items.length);
    calTotalPrice(items);
  }, [items, authCheck]);

  return (
    <Layout>
      <div className="container">
        <main className="pt-5 mt-5">
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
                {items &&
                  items.map((i: any, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between lh-sm"
                      key={index}
                    >
                      <div>
                        <h6 className="my-0">{i.name}</h6>
                        <a href="#" className="link-danger">
                          <small>Remove Item</small>
                        </a>
                      </div>
                      <span className="text-muted">${i.price}</span>
                    </li>
                  ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${totalPrice}</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form
                className="needs-validation was-validated"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                      defaultValue={"John Doe"}
                      {...register("name", { required: true })}
                    />
                    {errors.name?.type === "required" &&
                      "Please enter your name."}
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="+91 98XXXXXXXX"
                      required
                      defaultValue={"+91 9876543210"}
                      {...register("phone", { required: true })}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid phone for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="you@example.com"
                      defaultValue={"johndoe@example.com"}
                      {...register("email", { required: true })}
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
                      defaultValue={"1234 Main test St"}
                      {...register("address", { required: true })}
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
                    readOnly
                    checked={true}
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
                    readOnly
                    checked={true}
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Cash On Delivery
                  </label>
                </div>

                <hr className="my-4" />

                <button
                  className={`w-100 btn btn-lg ${
                    orderPlaced ? "btn-success" : "btn-primary"
                  }`}
                  type="submit"
                  disabled={items.length === 0 ? true : false}
                >
                  {orderPlaced ? "Order Placed ✔" : "Place Order"}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
