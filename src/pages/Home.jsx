import React, { useEffect, useRef, useState }  from 'react'
import Banner from '../components/Banner/Banner'
import ReferSection from '../components/ReferSection/ReferSection';
import Footer from '../components/Footer/Footer';
import StickyBanner from '../assets/images/stickyBanner.webp';
import { Image } from 'react-bootstrap';
import GamesSection from '../components/Games/Games';
import SubscribeFaq from '../components/SubscribeFaq/SubscribeFaq';
import SocialMedia from '../components/socialMedia/SocialMedia';

function Home() {

  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const top = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <Banner />
      <div className="bg-stickyBanner position-relative">
        <Image src={StickyBanner}  className={`${isSticky ? "stickyBanner" : "position-absolute"} bg-stickyImg`} fluid />
        <ReferSection ref={stickyRef} />
        <GamesSection />
        <SubscribeFaq/>
        <SocialMedia />
        <Footer/>
      </div>
    </>
  )
}

export default Home;
