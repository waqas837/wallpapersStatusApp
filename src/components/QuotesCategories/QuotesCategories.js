import React from "react";
import { Grid, Box, Typography, Divider, Container, Hidden } from "@material-ui/core";
import image from "../../images/download.jpg";
import image2 from "../../images/img2.jpg";
import image3 from "../../images/img3.jpg";
import image4 from "../../images/img4.jpg";
import image5 from "../../images/imge1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainCourseCategory from "../MainCourseCategory/MainCourseCategory";
const QuotesCategories = () => {
  return (
    <div>
      <Box my={3}>
      {/* caresoule */}
      {/* caresoule for large screens*/}
    <Hidden only={['xs','sm']}>
    <Box mb={5}>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={0}
          centerMode
          centerSlidePercentage={30}
           
        >
          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image} alt="" width="100px" height="200px"/>
          </div>

          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image2} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image3} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image4} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image5} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img style={{borderRadius:"10px"}} src={image3} alt="" width="100px" height="200px" />
          </div>
        </Carousel>
      </Box>
    </Hidden>
      {/*carosoul for the mobile showing */}
      <Hidden only={['xl','lg','md']}>
         {/* for the mobile showing */}
      <Box mb={5}>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={0}
          centerMode
          // centerSlidePercentage={30}
           
        >
          <div style={{ padding: "10px" }}>
            <img src={image} alt="" width="100%" height="300px"/>
          </div>

          <div style={{ padding: "10px" }}>
            <img src={image2} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image4} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image5} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100%" height="300px" />
          </div>
        </Carousel>
      </Box>
      </Hidden>
      </Box>
      {/* catogories */}
      <MainCourseCategory/>
    </div>
  );
};

export default QuotesCategories;
