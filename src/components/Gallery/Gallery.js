import React from "react";
import "./Gallery.scss";
const Gallery = () => {
  let smallImgs = [1, 2, 3, 4, 5];
  console.log(smallImgs);
  return (
    <div className="Gallery">
      <div className="Gallery__imgCtn Gallery__imgCtn-big">
        <img className="Gallery__img Gallery__img-big" src="" alt="" />
      </div>

      <div className="Gallery__wrapper">
        {smallImgs.map((smlImg, i) => {
          console.log(i);
          return (
            <div key={i} className="Gallery__imgCtn Gallery__imgCtn-sml">
              <img className="Gallery__img Gallery__img-sml" src="" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
