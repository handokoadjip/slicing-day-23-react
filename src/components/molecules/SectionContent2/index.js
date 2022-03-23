import { Img3, Img4 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-5 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6 p-0">
                <div className="h-image-150px h-image-lg-300px border-top pt-3 w-100 w-lg-50 float-end">
                  <p className="ps-3">summer</p>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="wrapper d-flex align-items-end h-100">
                  <figure className="m-0">
                    <img
                      className="h-image-150px h-image-lg-300px w-100 grayscale"
                      src={Img3}
                      alt="image-3"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-12 pt-3 p-0">
                <div className="h-image-150px h-image-lg-300px border-top pt-3 w-100 w-lg-25 float-end me--20px">
                  <p className="pe-3 text-end">Aituzarra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 pe-0 ps-3 pe-lg-3">
            <div className="wrapper">
              <figure className="m-0">
                <img
                  className="h-image-300px h-image-lg-600px w-100 grayscale"
                  src={Img4}
                  alt="image-4"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
