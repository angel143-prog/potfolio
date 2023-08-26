import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import { serviceData } from "@/data/data";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn } from "src/variants";

const ServiceSlider = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      className="w-full xl:max-w-[65%]"
    >
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="group flex h-max cursor-pointer gap-x-6
             rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0"
              >
                {/* icon */}
                <div className="mb-4 text-4xl text-accent">{service.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{service.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {service.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </motion.div>
  );
};

export default ServiceSlider;
