import Link from 'next/link'

const Header = () => {
    return (
        <header className="hidden w-full lg:flex px-24 items-center justify-between">
            <h1 className="text-3xl font-bold text-black">LOGO</h1>
            <nav className='flex items-center space-x-16'>
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
            <button className='px-10 py-4 bg-[#EF9219] text-white'>
                Login
            </button>
        </header>
    )
}


export default Header