import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function login() {
  return (
    <div className="text-center form-center" style={{ minHeight: "100vh" }}>
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="/favicon.ico"
            alt=""
            width="57"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <small>
              {"didn't have Account "}
              <Link href="/signup">
                <a>Create New</a>
              </Link>
            </small>
            {/* <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label> */}
          </div>
          <button
            className="w-100 btn btn-lg btn-outline-primary"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© {new Date().getFullYear()}</p>
        </form>
      </main>
    </div>
  );
}
