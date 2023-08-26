import { testimonialData } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "src/variants";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      className="w-full xl:max-w-[100%]"
    >
      {/* <WorkSwiper workSlide={workSlides} /> */}
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[400px]"
      >
        {testimonialData.map((testimonial, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div className="flex h-full flex-col items-center gap-x-8 px-16 md:flex-row">
                  {/* avatar, name, position */}
                  <div className="relative mx-auto flex w-full max-w-[300px] flex-col items-center xl:mx-0 xl:justify-center">
                    <div className="flex flex-col justify-center text-center">
                      {/* avatar */}
                      <div className="mx-auto mb-2">
                        <Image
                          alt={testimonial.name}
                          src={testimonial.image}
                          width={100}
                          height={100}
                          className=""
                        />
                      </div>
                      {/* name */}
                      <div className="text-lg">{testimonial.name}</div>
                      {/* position */}
                      <div className="text-[12px] font-extralight uppercase tracking-widest">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  {/* quote & message */}
                  <div className="relative flex flex-1 flex-col justify-center before:w-[1px] xl:pl-20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:before:bg-white/20">
                    {/* quote icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl" />
                    </div>
                    {/* message */}
                    <div className="text-center md:text-left xl:text-lg">
                      {testimonial.message}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
