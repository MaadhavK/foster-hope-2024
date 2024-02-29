import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function HomeCarousel() {
  const images = [
    {src: "/images/FrontPageImage.jpg", caption: "Image 1"},
    {src: "/images/homePage2.jpg", caption: "Image 2"},
    {src: "/images/homePage3.jpg", caption: "Image 3"},
  ];
  
  const CarouselItems = (images) => {
    return images.map((img, idx) => (
          <Carousel.Item key = {idx} interval={3000} style={{height:"400px", background: "#a8d5b9"}}>
            <Image src={img.src} fluid style={{objectFit: "cover", width:"100%", height:"100%", opacity: ".95", borderRadius: "10px"}}/>
          </Carousel.Item>
          
      ));
    };

  return (
    <>
      <Carousel style={{minWidth:"400px", maxWidth:"100vw", position:"relative"}}>
        {CarouselItems(images)}
      </Carousel>
    </>
  )
}

export default HomeCarousel;
