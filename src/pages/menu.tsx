import Footer from "@/components/Footer"
import Header from "@/components/Header"
import OurGallery from "@/components/OurGallery"
import Head from "next/head"


import Image from 'next/image'

const Menus = () => {
    return (
        <main className="flex flex-col w-full min-h-screen pt-10 ">
            <Header />
            <div className="lg:px-24 w-full px-8 py-10">
                <div className="relative">
                    <h2 className="text-4xl font-bold">Our Menu</h2>
                    <div className="absolute bottom-0 left-0 bg-orange-400 h-[15px] w-[150px] -z-10" />
                </div>
                <div className="w-full bg-orange-400 py-1" />

                <div className="w-full flex flex-col lg:flex-row mt-10 h-[90vh]">
                    <div className="lg:w-1/2 w-full">
                        <div className="w-full bg-[#BB885A] py-6 px-5">
                            <h2 className="text-white text-3xl font-semibold">Vegeterian</h2>
                        </div>

                        <div className="overflow-y-auto p-10">

                            <div className="space-y-5">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>
                            <div className="space-y-5 mt-4">
                                <h2 className="text-2xl font-semibold">Grand Fruit Bowl </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">(Berry,YOughert,Fresh Fruits,Rolled Oats) </p>
                                    <p className="text-xl font-bold">....................  450 rs</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='relative w-full lg:w-1/2 h-[90vh] '>
                        <Image src="/images/restaurant.png" className=' z-10 aspect-auto' fill alt="" />
                    </div>
                </div>
            </div>
            <OurGallery />
            <div className="mt-10" />
            <Footer />
        </main>
    )
}


export default Menus