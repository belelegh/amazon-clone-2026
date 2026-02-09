import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../../assets/img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Carousel/Carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteloop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;



// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "../../assets/img/data";
// import styles from "./Carousel.module.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function CarouselEffect() {
//   return (
//     <>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={false}
//         showThumbs={false}
//       >
//         {img.map((imgItemLink, i) => (
//           <div key={i} className={styles.slide}>
//             <img src={imgItemLink} alt={`slide-${i}`} />
//           </div>
//         ))}
//       </Carousel>

//       <div className={styles.hero__img}></div>
//     </>
//   );
// }

// export default CarouselEffect;



// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "../../assets/img/data";
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



// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "../../assets/img/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import classes from "../Carousel/Carousel.module.css";

// function CarouselEffect() {
//   // Add validation for images array
//   if (!img || !Array.isArray(img) || img.length === 0) {
//     console.error("No images found for carousel");
//     return (
//       <div className={classes.carousel_fallback}>
//         <div className={classes.fallback_content}>
//           <h3>Featured Content</h3>
//           <p>Check back soon for our latest offers!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={classes.carousel_wrapper}>
//       <Carousel
//         autoPlay={true}  // Fixed: Should be autoPlay not autoplay
//         infiniteLoop={true} // Fixed: Should be infiniteLoop not infiniteloop
//         showIndicators={true}
//         showThumbs={false}
//         showStatus={false} // Hide slide counter
//         interval={5000} // 5 seconds between slides
//         transitionTime={500} // Smooth transition
//         stopOnHover={true} // Pause on hover
//         swipeable={true} // Enable touch swiping
//         emulateTouch={true} // Enable touch emulation
//         showArrows={true} // Show navigation arrows
//         renderArrowPrev={(onClickHandler, hasPrev, label) =>
//           hasPrev && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               className={`${classes.carousel_arrow} ${classes.arrow_prev}`}
//             >
//               ‹
//             </button>
//           )
//         }
//         renderArrowNext={(onClickHandler, hasNext, label) =>
//           hasNext && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               className={`${classes.carousel_arrow} ${classes.arrow_next}`}
//             >
//               ›
//             </button>
//           )
//         }
//         renderIndicator={(onClickHandler, isSelected, index, label) => {
//           if (isSelected) {
//             return (
//               <li
//                 className={`${classes.indicator} ${classes.indicator_selected}`}
//                 aria-label={`Selected: ${label} ${index + 1}`}
//                 title={`${label} ${index + 1}`}
//               />
//             );
//           }
//           return (
//             <li
//               className={classes.indicator}
//               onClick={onClickHandler}
//               onKeyDown={onClickHandler}
//               value={index}
//               key={index}
//               role="button"
//               tabIndex={0}
//               aria-label={`${label} ${index + 1}`}
//               title={`${label} ${index + 1}`}
//             />
//           );
//         }}
//       >
//         {img.map((imageItemLink, index) => {
//           // Add alt text for accessibility
//           const altText = `Promotional banner ${index + 1}`;
          
//           return (
//             <div key={index} className={classes.slide_container}>
//               <img 
//                 src={imageItemLink} 
//                 alt={altText}
//                 loading="eager" // Load carousel images immediately
//                 className={classes.carousel_image}
//                 onError={(e) => {
//                   e.target.onerror = null; // Prevent infinite loop
//                   e.target.src = "https://via.placeholder.com/1200x400/cccccc/969696?text=Promo+Banner";
//                 }}
//               />
//               {/* Optional: Add text overlay */}
//               <div className={classes.caption_overlay}>
//                 <h3 className={classes.caption_title}>
//                   Special Offer {index + 1}
//                 </h3>
//                 <p className={classes.caption_text}>
//                   Limited time deal - Shop now!
//                 </p>
//                 <button className={classes.caption_button}>
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselEffect;