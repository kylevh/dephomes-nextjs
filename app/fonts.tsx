import React from 'react'
import { Mulish } from 'next/font/google'
import localFont from 'next/font/local'

const mul = Mulish({
    subsets: ['latin'],
    weight: ['200', '400', '500'],
    variable: '--font-mulish'
})

const mn = localFont({
    src: [
        {
            path: './fonts/MoonLight.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/MoonBold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-moon',
})
const arge = localFont({
    src: [
        {
            path: './fonts/ArgentumSans-ExtraLight.otf',
            weight: '200',
            style: 'normal',
        },
        // {
        //     path: './fonts/ArgentumSans-Light.otf',
        //     weight: '200',
        //     style: 'normal',
        // },
        // {
        //     path: './fonts/ArgentumSans-Regular.otf',
        //     weight: '400',
        //     style: 'normal',
        // },
        // {
        //     path: './fonts/ArgentumSans-Medium.otf',
        //     weight: '500',
        //     style: 'normal',
        // },
    ],
    variable: '--font-argentum',
    display: 'block',
})

export const mulish = mul;
export const argentum = arge;
export const moon = mn;
