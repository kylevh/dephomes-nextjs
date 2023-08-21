import React from 'react'

export default async function getAllProjects() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums' {
        
    })
    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()
}