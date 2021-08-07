/* eslint-disable @next/next/no-img-element */
export default function Products() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
          <div className="col ">
            <div className="card shadow-sm">
              <img src="/cover-3.jpg" alt="" style={{ height: "250px" }} />
              <div className="card-body">
                <h5 className="card-text">Product Name</h5>
                <p className="card-text text-muted">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <h4 className="text-success">$99</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
