import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../../assets/img/data";
import styles from "./CarsouselEffect.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItemLink, i) => (
          <div key={i} className={styles.slide}>
            <img src={imgItemLink} alt={`slide-${i}`} />
          </div>
        ))}
      </Carousel>

      <div className={styles.hero__img}></div>
    </>
  );
}

export default CarouselEffect;



// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "./img/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import classes from "../Carousel/Carousel.module.css";
// function CarouselEffect() {
//   return (
//     <div>
//       <Carousel
//         autoplay={true}
//         infiniteloop={true}
//         showIndicators={true}
//         showThumbs={false}
//       >
//         {img.map((imageItemLink) => {
//           return <img src={imageItemLink} />;
//         })}
//       </Carousel>
//       <div className={classes.hero_img}></div>
//     </div>
//   );
// }

// export default CarouselEffect;
