import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full px-4 lg:px-24 py-6 bg-[#322112]">
            <div className='flex items-center justify-between'>
                <h2 className="text-4xl text-white font-semibold">LO<br />GO</h2>
                <nav className='flex items-center text-white space-x-16'>
                    <Link href={"/"}>
                        <p className='text-sm hover:underline underline-offset-4 font-medium'>Home</p>
                    </Link>
                    <Link href={"/menu"}>
                        <p className='text-sm hover:underline font-medium underline-offset-4'>Menus</p>
                    </Link>
                    <Link href={"/"}>
                        <p className='text-sm hover:underline font-medium underline-offset-4'>Gallery</p>
                    </Link>
                    <Link href={"/"}>
                        <p className='text-sm hover:underline font-medium underline-offset-4'>About us</p>
                    </Link>
                    <Link href={"/"}>
                        <p className='text-sm hover:underline font-medium underline-offset-4'>Contact us</p>
                    </Link>
                </nav>
            </div>

            <div className='flex items-center pt-5 justify-between'>
                <h2 className='text-2xl font-semibold text-white'>&copy;2023 Silly. All rights reserved.</h2>
                <div className='flex space-x-10'>
                    <Image src="/images/Vector.svg" width={30} height={30} alt="" />
                    <Image src="/images/Vector-1.svg" width={30} height={30} alt="" />
                    <Image src="/images/Vector-2.svg" width={30} height={30} alt="" />
                    <Image src="/images/Vector-3.svg" width={30} height={30} alt="" />
                </div>
            </div>
        </footer>
    )
}


export default Footer