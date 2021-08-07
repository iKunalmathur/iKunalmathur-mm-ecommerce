import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function signup() {
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
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="John Doe"
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="jonedoe@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="password"
            />
            <label htmlFor="floatingInput">Password</label>
          </div>

          <div className="checkbox mb-3">
            <small>
              {"Alreaedy have An Account "}
              <Link href="/login">
                <a>Login</a>
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
            Sign Up
          </button>

          <p className="mt-5 mb-3 text-muted">© {new Date().getFullYear()}</p>
        </form>
      </main>
    </div>
  );
}
