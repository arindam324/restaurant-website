import Image from "next/image"

const DecorativePlants = () => {
    return (
        <section className="flex w-full py-16 px-24 items-center  flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[500px]">
                <Image src="/images/restaurant2.png" className="p-10 z-10" fill alt="" />
                <div className='absolute left-0 bottom-0 z-0'>
                    <Image src="/images/Rectangle 1.svg" alt="" width={400} height={250} />
                </div>
            </div>
            <div className="lg:w-1/2 space-y-5">
                <h2 className="text-[48px] font-semibold leading-[60px]">The World of Decorative Plants</h2>
                <p className="text-[16px] font-medium leading-[24px]">Discover more thant 100 Indoor plants for the Small-Space Gardener, and How to Care for Them Your home will be a plant paradise before you know it.</p>
                <button className=" px-10 py-3 bg-[#EF9219] text-white">
                    Learn More
                </button>
            </div>
        </section>
    )
}


export default DecorativePlants