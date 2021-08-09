import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function login() {
  if (true) {
    return (
      <div className="text-center form-center" style={{ minHeight: "100vh" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}
              <h2 className="fw-bold mb-0">Login for Access</h2>
              <button
                type="button"
                className="btn-close disabled"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                  type="submit"
                >
                  Login
                </button>
                <small className="text-muted">
                  By clicking Login, you agree to the terms of use.
                </small>
                <small className="text-muted d-block">
                  {"Didn't have Account "}
                  <Link href="/signup">
                    <a>Create New</a>
                  </Link>
                </small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
                  type="submit"
                >
                  <i className="fab fa-twitter" aria-hidden="true"></i> Login
                  with Twitter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
