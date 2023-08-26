import { workSlides } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "src/variants";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      className="w-full xl:max-w-[65%]"
    >
      {/* <WorkSwiper workSlide={workSlides} /> */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div className="grid cursor-pointer grid-cols-2 grid-rows-2 gap-4">
                  {slide.images.map((image: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="group relative flex items-center justify-center overflow-hidden rounded-lg"
                      >
                        <div className="group relative flex items-center justify-center overflow-hidden">
                          {/* image */}
                          <Image
                            src={image.path}
                            alt={image.title}
                            width={500}
                            height={300}
                          />
                          {/* overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"></div>
                          {/* title */}
                          <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              {/* title part 1 */}
                              <div className="delay-100">LIVE</div>
                              {/* title part 2 */}
                              <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
                                PROJECT
                              </div>
                              {/* title part 3 */}
                              <div className="translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0">
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            </>
          );
        })}
        ...
      </Swiper>
    </motion.div>
  );
};

export default WorkSlider;
