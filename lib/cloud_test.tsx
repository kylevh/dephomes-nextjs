import { Cloudinary } from '@cloudinary/url-gen'
import { v2 as cloudinary } from 'cloudinary';
import { CldImage } from 'next-cloudinary';
import React from 'react'

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
    }
})

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
//     secure: true,
// });

// cloudinary.api
//     .resources_by_tag("header")
//     .then(result => console.log(result));


// '/tags/header

export const getStaticProps = async () => {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/header?max_results=36`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    }).then(results => results.json());

    if (!results.ok) throw new Error('Failed to fetch photos!')
    return results.json()
}

export async function getPhotoHeaders() {
    try {
        const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/header?max_results=36`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        }).then(results => results.json());

        // console.log(results);

        //.then(r => r.json());

        // const imagesData = resources.map(imageData<> => {
        //     const { width, height } = imageData;
        //     return {
        //         folder: imageData.folder,
        //         imageUrl: imageData.secure_url,
        //         width,
        //         height,
        //     }
        // })
        console.log(results);

        if (!results.ok) throw new Error('Failed to fetch photos!')
        return (
            <>
                {/* {
                    results.map({photoData} : {<Photo>} => {
                        <CldImage
                            src='20_1759-19th-AveS/hero20_utk8ix'
                            alt='DEPHomes home'
                            fill
                            className='cursor-pointer object-cover w-full h-full'
                        />
                    })

                } */}

            </>
        )
    } catch (error) {
        console.error('Fetch error:', error)
    }
}