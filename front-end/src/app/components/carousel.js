"use client"
import styles from "../page.module.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

export default function HomeCarousel(){
    const IMAGE_OPACITY = 0.6
  const IMAGE_HEIGHT = '30rem'
  const COLOR_OVERLAY = 'rgba(0, 0, 0, 0.5)'

    return (
    <Carousel style={{ width: '100%', height: IMAGE_HEIGHT, background: COLOR_OVERLAY }}>
      <Carousel.Item interval={1000}>
        <Image src="/images/FrontPageImage.jpg" fluid style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: IMAGE_OPACITY }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="/images/FrontPageImage.jpg" fluid style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: IMAGE_OPACITY }}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/FrontPageImage.jpg" fluid style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: IMAGE_OPACITY }}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}