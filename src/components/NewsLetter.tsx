import Image from 'next/image'

const NewsLetter = () => {
    return (
        <div className="w-full relative flex items-center justify-center mt-10 h-[400px]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Image src="/images/background.png" alt="" fill className='' />

            <div className='relative z-10 w-[40%] space-y-4 flex flex-col items-center'>
                <h2 className='text-[38px] font-semibold leading-[48px] text-white'>Subscribe to Our NewsLetter</h2>
                <div className='flex items-center  w-full'>
                    <div className='w-[80%] bg-white py-4 rounded-l-md'>
                        <input type='email' placeholder='Enter your Email id here' className='px-4 focus:outline-none' />
                    </div>
                    <button className='bg-[#EF9219] rounded-r-md text-white w-[20%] py-4 tex-white'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}


export default NewsLetter