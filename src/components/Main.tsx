import Image from 'next/image'

const Main = () => {
    return (
        <div className="flex flex-col relative py-10 px-24 w-full h-[85vh] lg:flex-row">
            <div className="lg:w-1/2 flex space-y-5 justify-center flex-col" >
                <h1 className="text-7xl font-bold leading-normal">Just a sample heading</h1>
                <p className="font-medium text-sm leading-[24px] text-[#5A5A5A]">Discover more thant 100 Indoor plants for the Small-Space Gardener, and How to Care for Them Your home will be a plant paradise before you know it.</p>
                <button className=" w-[25%] py-3 bg-[#EF9219] text-white">Explore Menu</button>
            </div>
            <div className="lg:w-1/2 flex items-center justify-end h-[85vh]">
                <div className='relative h-[90%] w-[70%]'>
                    <Image src="/images/restaurant.png" className=' z-10 aspect-auto' fill alt="" />
                </div>
            </div>
            <div className='h-full absolute bg-[#BB885A] right-0 w-[16%]' />
        </div>
    )
}


export default Main