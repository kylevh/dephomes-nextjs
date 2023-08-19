'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { argentum, moon, mulish } from '@/app/fonts'
import { BsList, BsX } from 'react-icons/bs'


const styles = {
    navLinks: `${argentum.className} font-light cursor-pointer antialiased text-sm w-32 uppercase hover:text-black text-white ease-in-out duration-200`,
    navLinksWhite: `${argentum.className} font-light cursor-pointer text-sm ml-20 uppercase hover:text-dep-offwhite text-dep-textColor ease-in-out duration-200`,
    navFont: `${moon.className} text-2xl`
}


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <nav className='w-full h-24  bg-grey opacity-75 absolute top-0 z-10'>
                {/* Desktop Menu */}
                <div className='flex items-center justify-between h-full px-6 sm:px-10 pt-[10px] sm:pt-[30px] w-full select-none no-drag unselectable'>
                    <div className='flex w-5/6 sm:w-1/3'>
                        <Link href='/' className='w-150'>
                            <Image
                                src='/images/dep-side-small-white.png'
                                alt='DEPHomes Logo'
                                width={150}
                                height={75}
                                className='cursor-pointer'
                                unoptimized
                            />
                        </Link>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <ul className='hidden sm:flex text-center'>
                            <li className={styles.navLinks}>
                                <Link href='/portfolio'>Portfolio</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/3'> </div>

                    {/* Mobile Menu */}
                    <div className='sm:hidden cursor-pointer pl-24' onClick={toggleMenu}>
                        <BsList className='h-8 w-8 text-gray-900'></BsList>
                    </div>
                </div>

                <div className={menuOpen ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-500 p-10 ease-in-out duration-500' : "fixed left-[-100%] top-0 p-10 ease-in-out"}>
                    <div className='flex w-full items-center justify-end'>
                        <div className='cursor-pointer'>
                            <BsX className='h-8 w-8 text-[secondary]' onClick={toggleMenu} />
                        </div>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className='flex-col py-4'>
                        <ul>
                            <li onClick={() => setMenuOpen(false)} className={`${styles.navFont} py-4 hover:underline hover:decoration-white`}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)} className={`${styles.navFont} py-4 hover:underline hover:decoration-[green]`}><Link href='/portfolio'>Portfolio</Link></li>
                            <li onClick={() => setMenuOpen(false)} className={`${styles.navFont} py-4 hover:onClick={() => setMenuOpen(false)}  hover:decoration-[green]`}><Link href='/about'>About</Link></li>
                            <li onClick={() => setMenuOpen(false)} className={`${styles.navFont} py-4 hover:underline hover:decoration-[green]`}><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header