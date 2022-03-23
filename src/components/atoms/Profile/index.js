import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  return (
    <div className="wrapper mb-3">
      <img
        className="h-image-150px h-image-lg-300px w-100 grayscale mb-5"
        src={props.image}
        alt={props.name}
      />
      <p class="text-fade-black-1 fs-5 pt-3">{props.quote}</p>
      <p class="text-fade-black-1 text-uppercase">{props.name}</p>
    </div>
  );
};

index.propTypes = {
  image: propTypes.string,
  quote: propTypes.string,
  name: propTypes.string,
};

export default index;
