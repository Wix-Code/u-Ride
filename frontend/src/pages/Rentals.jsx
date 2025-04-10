import React, { useContext, useEffect, useRef } from 'react'
import { cars } from '../utils/dumyData'
import AOS from "aos";
import "aos/dist/aos.css";
import { storeContext } from '../utils/Context';
import { Link } from 'react-router-dom';
import Loader from '../utils/Loader';

const Rentals = () => {
  const formRef = useRef(null);
  const { carData, loading } = useContext(storeContext)

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  /*if (loading) {
    return (
      <div className='h-[80vh] flex justify-center items-center'>
        <img src="https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/NAIRAXI-luxury-car-rentals-with-chauffeur-vip.jpg" alt="" />
      </div>
    )
  }*/
  return (
    <div className='font-display flex flex-col sm:gap-10 lg:gap-20'>
      <div className='lg:h-[75vh] sm:h-[60vh] mt-5 flex justify-center flex-col gap-3 items-center bg-cover bg-center bg-[url("https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/NAIRAXI-luxury-car-rentals-with-chauffeur-vip.jpg")]'> 
        <h1 className='text-[#FFFFFF] text-center lg:text-[48px] sm:text-[30px] font-extrabold'>Luxury Car Rentals with Chauffeur</h1>
        <p className='text-[#FFFFFF] text-center lg:text-[18px] sm:text-[18px] font-bold'>Airport Transfer, Private Car Hire Services in Abuja, Lagos, Kano, PH & All major cities in Nigeria
        </p>
        <button className='py-3 px-7 bg-white border-[2px] border-[#28a745] text-[14px] font-normal text-[#28a745] hover:bg-[#28a745] hover:text-white transition-all duration-[0.5s] hover:border-[2px] hover:border-white cursor-pointer' onClick={handleScrollToForm}>Book Now</button>
      </div>
      <div className='flex justify-center flex-col items-center max-w-[750px] lg:m-auto sm:mx-5'>
        <p className='font-extrabold uppercase text-[#1d274e]'>What we do</p>
        <p className='text-center lg:text-[16px] sm:text-[12px] font-medium mt-5 text-[#343a40]'>U-RIDE Luxury Car Rentals with Chauffeur gets you to your destination promptly and comfortably. Our experienced staff offers personalized and professional assistance that enhances any celebration or corporate event. You can rely on a clean picture perfect condition vehicle waiting for you for special occasions and corporate ground transportation.</p>
      </div>
      <div className='flex items-center max-w-[1150px] lg:m-auto lg:flex-row lg:gap-8 sm:flex-col sm:gap-4 sm:mx-5 overflow-hidden'>
        <div className='flex flex-col lg:gap-5 sm:gap-3'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p data-aos="fade-right" className='text-[#1d274e] font-bold sm:text-[18px] lg:text-[24px]'>Airport Transportation</p>
          <p data-aos="fade-right" className='text-[#343a40] sm:text-[14px] lg:text-[16px]'>We provide pick up and drop off and shuttle service to and from all major local airports in surrounding areas in one of our comfortable luxury sedans. We can assist you with airport transfers for stress-free travel and take you to all your desired destinations.</p>
        </div>
        <div className='flex flex-col gap-3 overflow-hidden'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p data-aos="fade-left" data-aos-delay="100" className='text-[#1d274e] font-bold sm:text-[18px] lg:text-[24px]'>Flexible Rentals</p>
          <p data-aos="fade-left" data-aos-delay="500" className='text-[#343a40] sm:text-[14px] lg:text-[16px] overflow-hidden'>Get your private transportation service for your special event such as your wedding day, corporate, night out on the town, bachelor/bachelorette party, concert, and more. We also provide high-quality private car service for your business meetings or corporate affairs.</p>
        </div>
      </div>
      <div className='bg-[#28a745] text-white text-center lg:px-52 lg:py-20 flex flex-col lg:gap-8 sm:px-5 sm:py-10 sm:gap-3'>
        <p className='lg:text-[22px] sm:text-[16px] font-medium'>RIDE IN STYLE</p>
        <h1 data-aos="fade-up" data-aos-delay="100" className='font-extrabold sm:text-[24px] lg:text-[50px]'>Comfort. Prompt. Professional</h1>
        <p className='lg:text-[22px] font-medium sm:leading-5 lg:leading-10 sm:text-[14px]'>Included in all transportation services are one (1) uniformed driver, complimentary water, WIFI, charging and complimentary snacks. Driver will be present at the pickup location fifteen (15) minutes before scheduled pickup time.</p>
      </div>
      <div>
        {
          loading ? (<Loader />) : (
            <div ref={formRef} className='grid lg:grid-cols-4 lg:gap-20 lg:max-w-[1100px] lg:m-auto sm:grid-cols-2 sm:gap-3 sm:mx-5'>
            {
              carData.map((car) => {
                return (
                  <div>
                    <div data-aos="fade-up" key={car.id} className='flex gap-2 flex-col items-center'>
                      <p className='text-[#343a40] sm:text-[10px] lg:text-[12px] uppercase'>{car.type}</p>
                      <img src={car.image} className='' alt={car.name} />
                      <h2 className='text-[#1d274e] sm:text-center font-bold sm:text-[16px] lg:text-[20px]'>{car.name}</h2>
                      
                      <Link to={`/${car.id}`}><button className='py-1 bg-white border-[2px] sm:px-2 lg:px-4 border-[#28a745] lg:text-[14px] sm:text-[10px] font-normal text-[#28a745] hover:bg-[#28a745] hover:text-white transition-all duration-[0.5s] cursor-pointer'>Book Now</button></Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
          )
        }
      </div>
      <div className='flex flex-col justify-center items-center sm:gap-3 lg:gap-5 lg:mx-0  sm:mx-5'>
        <img src="https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/NAIRAXI-luxury-car-rentals-with-chauffeur-vip.jpg" width={650} alt='' />
        <h1 className='lg:text-[24px] sm:text-[18px] font-bold text-[#1d274e]'>Luxury Car Rentals with Chauffeur</h1>
        <p className='lg:w-[800px] sm:w-full sm:text-[14px] lg:text-[16px] text-center text-[#343a40]'>Experience the pinnacle of luxury travel with Nairaxi’s exclusive Luxury Car Rentals with Chauffeur service. Elevate every journey to an unforgettable experience of sophistication, comfort, and style as you explore the vibrant landscapes of Nigeria.</p>
        <p className='lg:w-[800px] sm:w-full sm:text-[14px] lg:text-[16px] text-center text-[#343a40]'>With our extensive fleet of meticulously maintained luxury vehicles, including sedans, SUVs, and limousines, Nairaxi ensures that you travel in the epitome of elegance. Whether you’re attending a glamorous event, exploring the bustling streets of Lagos, or embarking on a scenic tour, our luxury car rentals with chauffeur service offer the perfect blend of opulence and convenience.</p>
        <p className='lg:w-[800px] sm:w-full sm:text-[14px] lg:text-[16px] text-center text-[#343a40]'>Our professional chauffeurs are the epitome of hospitality and professionalism, dedicated to providing you with a seamless and stress-free travel experience. With their expert navigation skills and commitment to excellence, you can sit back, relax, and enjoy the journey while we take care of every detail.</p>
        <p className='lg:w-[800px] sm:w-full sm:text-[14px] lg:text-[16px] text-center text-[#343a40]'>Nairaxi’s Luxury Car Rentals with Chauffeur service is the ultimate choice for discerning travelers who demand nothing but the best. Whether you’re a busy executive in need of reliable transportation for business meetings, or a couple celebrating a special occasion, our chauffeur-driven luxury cars ensure that you arrive in style, on time, and in complete comfort.</p>
        <p className='lg:w-[800px] sm:w-full sm:text-[14px] lg:text-[16px] text-center text-[#343a40]'>From the moment you step into one of our luxurious vehicles, you’ll be immersed in a world of unparalleled luxury and refinement. Our chauffeurs are trained to anticipate your every need, ensuring that your journey is not only luxurious but also personalized to your preferences.</p>
      </div>
    </div>
  )
}

export default Rentals