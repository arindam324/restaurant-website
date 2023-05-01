import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import Image from "next/image"

const OurGallery = () => {
    return (
        <section className="w-full px-24 pt-20">
            <div className="flex items-center justify-between">
                <h2 className="text-[48px] font-semibold leading-[60px]">Our Gallery</h2>
                <button className="py-3 bg-[#EF9219] text-white px-6">
                    Explore More
                </button>
            </div>

            <div className="pt-5">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='relative w-full h-[100px] lg:h-[400px]'>
                            <Image src="/images/restaurant2.png" className="object-cover" alt="" fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill className="object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant2.png" alt="" fill className="object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill className="object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default OurGallery
