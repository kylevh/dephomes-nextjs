import HeroButton from '@/components/HeroButton'
import HeroText from '@/components/HeroText'
import HeroImage from '@/components/HeroImage';

export default async function Home() {


  return (
    <main className="w-screen h-screen flex justify-center items-center ">
      <div className='absolute w-auto justify-center '>
        <HeroText />
        <HeroButton />
      </div>
      <HeroImage />
    </main>
  )
}
