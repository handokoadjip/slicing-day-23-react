import { Img1, Img2 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-0 my-lg-5 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 p-0 ps-lg-3">
            <div className="wrapper">
              <figure className="m-0">
                <img
                  className="h-image-300px h-image-lg-600px w-100 grayscale"
                  src={Img1}
                  alt="image-1"
                />
              </figure>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="h-image-150px h-image-lg-300px border-top pt-3 w-100 w-lg-25">
                  <p className="ps-3">Zofia Chylak</p>
                </div>
              </div>
              <div className="col-6 ps-3 pe-0">
                <div className="wrapper d-flex align-items-end h-100">
                  <figure className="m-0">
                    <img
                      className="h-image-150px h-image-lg-300px w-100 grayscale"
                      src={Img2}
                      alt="image-2"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="h-image-150px h-image-lg-300px border-top pt-3 w-100 w-lg-50">
                  <p className="ps-3">Tsovet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
