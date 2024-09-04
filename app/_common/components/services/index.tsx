'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const projects = [
  { img: '/assets/Services 1.png', text: 'Small Projects' },
  { img: '/assets/Services 2.png', text: 'Competitive Projects' },
  { img: '/assets/Services 3.png', text: 'Project 3' },
  { img: '/assets/Services 4.png', text: 'Project 4' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
  { img: '/assets/Services 5.png', text: 'Project 5' },
];

const SwiperComponent = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative flex flex-col justify-center gap-5 mx-5 md:m-10 md:gap-10'>
      <div className=" inline-block text-left">
        <p className="text-headerColor-500 text-lg md:text-3xl font-medium">
          Most Popular Services in
          <span
            className="relative text-buttonColor-500 text-lg md:text-3xl font-medium cursor-pointer"
            onClick={toggleDropdown}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            &nbsp; Design
            <IoIosArrowDown style={{ marginLeft: '0.5em' }} />
          </span>
        </p>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ left: '23em', top: '5em' }}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Option 3
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="swiper-container relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            console.debug(swiper);
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative rounded-3xl w-full h-full">
                <img
                  src={project.img}
                  alt={project.text}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={prevRef} className="hidden md:block swiper-button-prev-custom select-none bg-buttonColor-500" onClick={() => {
          const { current: swiper } = swiperRef;
          if (!swiper) return;
          swiper.slidePrev();
        }}>
          <HiArrowSmLeft />
        </div>
        <div ref={nextRef} className="hidden md:block swiper-button-next-custom select-none bg-buttonColor-500" onClick={() => {
          const { current: swiper } = swiperRef;
          if (!swiper) return;
          swiper.slideNext();
        }}>
          <HiArrowSmRight />
        </div>

        <style jsx>{`
          .swiper-container::before,
          .swiper-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 50px;
            z-index: 5;
          }
          .swiper-container::after {
            right: -1px;
            background: linear-gradient(to left, rgba(250, 250, 250, 1), rgba(250, 250, 250, 0));
          }
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
            z-index: 10;
            cursor: pointer;
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          .swiper-button-prev-custom {
            left: 5px;
          }
          .swiper-button-next-custom {
            right: 20px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SwiperComponent;
