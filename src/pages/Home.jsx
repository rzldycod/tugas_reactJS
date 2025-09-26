import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Lord of the Rings: The Return of the King
            </h1>
            <p className="lead">
              The adventure continues in the final installment of the epic fantasy trilogy, where the fate of Middle-earth hangs in the balance as Frodo and Sam make their perilous journey to destroy the One Ring.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy Now
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Details
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://m.media-amazon.com/images/I/81krXXdKn2L._UF1000,1000_QL80_.jpg"
              width={390}
              alt="Lord of the Rings Book"
            />
          </div>
        </div>
      </div>

      {/* Album Section */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">
              Koleksi buku pilihan dari berbagai genre, siap menemani hari-harimu.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&w=400&h=225" 
                  className="card-img-top" 
                  alt="Book Album 1"
                />
                <div className="card-body">
                  <p className="card-text">
                    Koleksi buku klasik yang wajib dibaca setiap pecinta literatur.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">12 mins ago</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1517770413964-df8ca61194a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dcrop=entropy&cs=tinysrgb&fit=max&w=400&h=225" 
                  className="card-img-top" 
                  alt="Book Album 2"
                />
                <div className="card-body">
                  <p className="card-text">
                    Buku motivasi dan pengembangan diri untuk menemani perjalanan hidupmu.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">30 mins ago</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1681825268400-c561bd47d586?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&w=400&h=225" 
                  className="card-img-top" 
                  alt="Book Album 3"
                />
                <div className="card-body">
                  <p className="card-text">
                    Koleksi novel modern untuk menambah wawasan dan hiburanmu.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">1 hour ago</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
