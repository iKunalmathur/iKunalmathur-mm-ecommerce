/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [auth, setauth] = useState<any>({ id: 1, name: "John Doe" });

  return (
    <>
      <Head>
        <title>MM E-commerce</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#15202b" }}
      >
        <div className="container" style={{ paddingBlock: "1em" }}>
          <a className="navbar-brand fw-bold fs-3" href="/">
            {/* <img
              src="/favicon.ico"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            ></img> */}
            {"🛒 MM E-commerce "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li> */}
            </ul>
            <div className="d-flex gap-2">
              {Object.keys(auth).length ? (
                <>
                  <div className="dropdown">
                    <a
                      className="btn btn-outline-light dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth.name}
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Account 👤
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout 🔥
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Link href="/cart">
                    <a className="btn btn-primary">🛒</a>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="btn btn-outline-primary">Login</a>
                  </Link>
                  <Link href="/signup">
                    <a className="btn btn-primary">Sign up</a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
