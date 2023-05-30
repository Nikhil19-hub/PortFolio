import pic from '../assests/nik.png'
import { useState,useEffect } from 'react';
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const About = () => {

    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Engineer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
}

  return (
          <section className="min-h-screen font-burtons p-10 lg:p-20">
        <TrackVisibility>
         {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__pulse" : ""}>
        <div className="text-center p-10 ">
          <h1 className='text-5xl mb-3 text-orange-500'>{`Hi! I'm Nikhil`} <br /><span className="text-3xl mb-2 pb-10 text-white" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Enginner", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
          <p className="text-2xl leading-9 md:max-w-xl mx-auto">
            Front-end wizard, obsessed with crafting visually stunning and engaging user interfaces that bring websites to life. <br />
            My toolkit includes HTML, CSS, and JavaScript, along with a deep understanding of popular front-end frameworks such as React and Angular. <br />
            From creating custom UI components to optimizing website performance, I thrive on solving complex problems with elegant solutions. <br />
            If you're looking for a front-end developer who's passionate about pushing the boundaries of what's possible online then, <br /> <a href="#contact"><span className='text-orange-500 animate__animated animate__bounce text-3xl'>Let's Connect.</span></a>
          </p>
        </div>
        <div className="mx-auto bg-gradient-to-b from-gray-800 to-white rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <img src={pic} alt="" />
        </div>
        </div>}
        </TrackVisibility>
      </section>
  )
}
