import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Image from 'next/image'

const DecoratesPlants = () => {
    return (
        <section className="w-full flex px-24 items-center pt-20">
            <div className="w-1/2 space-y-5">
                <h2 className="text-[48px] font-semibold leading-[60px]">The World of Decorative Plants</h2>
                <p className="text-[16px] font-medium leading-[24px]">Discover more thant 100 Indoor plants for the Small-Space Gardener, and How to Care for Them Your home will be a plant paradise before you know it.</p>
                <button className=" px-10 py-3 bg-[#EF9219] text-white">
                    Learn More
                </button>
            </div>
            <div className="w-1/2">
                <Swiper
                    spaceBetween={50}
                    autoplay
                    loop
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
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


export default DecoratesPlants