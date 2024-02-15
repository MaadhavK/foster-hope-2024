import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';;

function HomeCarousel() {
  const images = [
    {src: "/images/FrontPageImage.jpg", caption: "Image 1"},
    {src: "/images/homePage2.jpg", caption: "Image 2"},
    {src: "/images/homePage3.jpg", caption: "Image 3"},
  ];
  const CarouselItems = (images) => {
    return images.map((img, idx) => (
          <Carousel.Item key = {idx} interval={1000} style={{width:"100%", height:"30rem", background: "rgba(0,0,0.5)"}}>
            <Image src={img.src} fluid style={{objectFit: "cover", width:"100%", height:"100%", opacity: "0.8", borderRadius: "10px"}}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
      ));
    };

  return (
    <>
      <Carousel style={{width:"40rem"}}>
        {CarouselItems(images)}
      </Carousel>
    </>
  )
}

export default HomeCarousel;