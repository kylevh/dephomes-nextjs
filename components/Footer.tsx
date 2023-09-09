import React from 'react'
import { argentum, moon, mulish } from "@/app/fonts";


function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-dep-primary">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img alt='test' src="/depFooter.png" width={100} height={100} className="w-10 h-10 text-dep-offwhite p-0 rounded-full"/>
                    <span className={`${argentum.className} font-light ml-3 text-xl text-dep-offwhite`}>DEP Homes</span>
                </a>
                <p className={`${mulish.className} text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`}>© 2023 DEP Homes —
                    <a href="https://www.linkedin.com/in/kylevhuynh/" className={`${mulish.className} text-gray-500 ml-1`} rel="noopener noreferrer" target="_blank">Designed by Kyle Huynh</a>
                </p>

            </div>
        </footer>
    )
}

export default Footer