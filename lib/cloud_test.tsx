import { Cloudinary } from '@cloudinary/url-gen'
import React from 'react'

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
    }
})

// cloudinary.config({
//     // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     // api_key: process.env.API_KEY,
//     // api_secret: process.env.API_SECRET,
// });

// cloudinary.api
//     .resources_by_tag("header")
//     .then(result => console.log(result));


// '/tags/header
export async function getPhotoHeaders() {
    try {
        const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/header?max_results=36`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
            }
        })

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

        if (!results.ok) throw new Error('Failed to fetch photos!')
        return results.json()
    } catch (error) {
        console.error('Fetch error:', error)
    }
}