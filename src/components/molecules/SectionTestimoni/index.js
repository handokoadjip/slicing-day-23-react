import { Img5, Img6 } from "assets/source/image";
import { Profile } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="my-5 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 pe-0">
            <div className="h-image-lg-150px h-image-lg-300px border-top w-100 w-lg-50 float-end">
              <p className="pe-3 text-end">Nowy Teatr</p>
            </div>
          </div>
          <div className="col-lg-3 ps-0">
            <Profile
              image={Img5}
              quote="*Glad to see 2 sites we created at @huncwotdigital featured on @siteinspire on a single day: artmuseum.pl & altuzarraa.com*"
              name="SWIDMAN"
            />
          </div>
          <div className="col-lg-3 pe-0">
            <Profile
              image={Img6}
              quote="*Got on Adobe #Security Acknowledgements page for finding a major #XSS vulnerablity in their site.*"
              name="SWIDMAN"
            />
          </div>
          <div className="col-lg-3 ps-0">
            <div className="h-image-150px h-image-lg-300px border-top w-100 w-lg-50">
              <p className="ps-3">KAMJZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
