import Image from 'next/image'
import { argentum, moon } from '@/app/fonts'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className='absolute w-auto justify-center'>
        <h1 className={`${argentum.className} weight-200 text-3xl text-dep-offwhite uppercase text-center`}>Innovation meets beauty, sustainability and quality</h1>
        <div className='relative w-full mt-6'>
          <button className={`${moon.className} absolute left-1/2 transform -translate-x-1/2 border-2 border-dep-offwhite px-4 py-1  text-dep-offwhite hover:bg-white hover:text-dep-textColor ease-in-out duration-200`}><Link href="/porfolio">VIEW PROJECTS</Link></button>
        </div>
      </div>
      <Image
        className="object-cover h-full w-full "
        src='/images/header2-2.png'
        alt="Stunning photo of a DEPHomes built house"
        width={2000}
        height={2000}
        unoptimized
      />
    </main>
  )
}
