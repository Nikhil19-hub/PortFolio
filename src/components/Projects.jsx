import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import Orderly from "../assests/orderlyy.netlify.app.png";
// import Housing from "../assests/lxk3008.uta.cloud.png";
// import nikhya from "../assests/nikhlya.netlify.app.png";
import Orderly from '../assests/Orderly.jpg'
import Housing from '../assests/housing.jpg'
import nikhlya from '../assests/nikhlya.jpg'
import {SiRedux,SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiExpress, SiMysql, SiPhp,SiLaravel} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'animate.css'
// ..
AOS.init();

export const Projects = () => {

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
    <section >
        <div className="font-burtons text-center">
          <h3 id="services" className="text-4xl py-10 text-orange-500">Services I offer</h3>
          <p className="text-2xl py-2 leading-10 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a web developer with a strong background in front-end and back-end development. <br /> 
            I've experience working on diverse projects and a passion for creating exceptional digital experiences, I offer a range of services tailored to meet clients' specific needs. <br />
            I specialize in developing responsive and user-friendly websites using <span className="text-orange-500">HTML5, CSS3, and JavaScript</span>, along with frameworks like <span className="text-orange-500">React and Angular</span>. <br />
            I have expertise in building <span className="text-orange-500">single-page applications (SPAs)</span> and implementing <span className="text-orange-500">RESTful APIs</span> for seamless communication between front-end and back-end systems. <br />
            Additionally, I excel in optimizing website performance, conducting thorough testing using tools like <span className="text-orange-500">Jest and Enzyme</span>, and ensuring efficient database management with platforms like <span className="text-orange-500">MongoDB, MySQL, and Oracle.</span> <br />
            Collaborating with clients and implementing their unique requirements is a key aspect of my approach, and I leverage my skills in version control with <span className="text-orange-500">Git</span> and project management tools like <span className="text-orange-500">Jira</span> to deliver successful projects. <br />
            I take pride in providing high-quality solutions and ensuring client satisfaction throughout the development process. <br />
          </p>
          <p id="projects" className="text-2xl pt-10 text-center font-burtons">Have a look at some of my work.</p>
        </div>
        
            <div  className="lg:flex md:flex gap-20 my-10  font-burtons text-center">
                
              {/* <Carousel responsive={responsive} infinite={true} className="container"> */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 h-full w-full lg:transform lg:transition lg:duration-500 lg:hover:scale-125">
                <a href="https://orderlyy.netlify.app/">
                  <img alt="Orderly - Food Ordering App" src={Orderly}  className="h-auto w-auto object-cover"/>
                </a>
                <div className="pt-10 flex items-center justify-center text-2xl gap-10 text-black">
                Tech Stack |
                <SiReact/>
                <SiMongodb/>
                <SiExpress/>
                {/* <FaNode/> */}
                <SiTailwindcss/>
                <SiRedux/>
                </div>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 h-full w-full lg:transform lg:transition lg:duration-500 lg:hover:scale-125">
                <a href="https://lxk3008.uta.cloud/">
                  <img alt="University Housing Portal" src={Housing}  className="h-auto w-auto object-cover"/>
                </a>
                <div className="pt-10 flex items-center justify-center text-2xl gap-10 text-black">
                Tech Stack |
                <SiReact/>
                <SiMysql/>
                <SiPhp/>
                <SiLaravel/>
                <SiRedux/>
                </div>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 h-full w-full lg:transform lg:transition lg:duration-500 lg:hover:scale-125">
                <a href="https://nikhlya.netlify.app/">
                  <img alt="nikhlya-cloud hosting website" src={nikhlya}  className="h-auto w-auto object-cover"/>
                </a>
                <div className="pt-10 flex items-center justify-center text-2xl gap-10 text-black">
                Tech Stack |
                <SiHtml5/>
                <SiCss3/>
                </div>
              </div>
              {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 h-full w-full lg:transform lg:transition lg:duration-500 lg:hover:scale-125">
                <a href="https://nikhlya.netlify.app/">
                  <img alt="nikhlya-cloud hosting website" src={nikhlya} />
                </a>
                <div className="pt-10 flex items-center justify-center text-2xl gap-10 text-black">
                Tech Stack |
                <SiHtml5/>
                <SiCss3/>
                </div>
              </div> */}
              {/* </Carousel> */}
            </div>
        
      </section>
  )
}
