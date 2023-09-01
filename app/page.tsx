import HeroButton from '@/components/HeroButton'
import HeroText from '@/components/HeroText'
import HeroImage from '@/components/HeroImage';
import cloudinary from 'cloudinary'

export default async function Home() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute();

  console.log(results);

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
