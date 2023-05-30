import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Orderly from "../assests/orderlyy.netlify.app.png";
import Housing from "../assests/lxk3008.uta.cloud.png";
import nikhya from "../assests/nikhlya.netlify.app.png";
import {SiRedux,SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiExpress, SiMysql, SiPhp,SiLaravel} from 'react-icons/si'
import {FaCarAlt, FaNode} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export const Sample = () => {
    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
        <Carousel responsive={responsive} infinite={true}>
            <div className="container mx-auto pb-4 text-white bg-black w-full rounded">
                <img src={Orderly} alt="orderlyy" />
            </div>
            <div>
                <img src={Housing} alt="Housing" />
            </div>
            <div>
                <img src={nikhya} alt="nikhlya" />
            </div>
        </Carousel>
    </div>
  )
}
