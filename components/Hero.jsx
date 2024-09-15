import Image from 'next/image'
import heroImg from '@/public/images/hero.jpg'
import Link from 'next/link'

const Hero = () => {
  return (
      <section className='min-h-[calc(100vh-80px)]  relative text-white grid place-items-center  hero'>
          <div className="container main-container grid lg:grid-cols-2 gap-8">
              <div className='flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl poppins-semibold tracking-wider mb-2 lg:mb-3 xl:mb-4'>Find Your Perfect Stay Today</h1>
          <h3 className='sm:text-xl lg:text-2xl xl:text-3xl text-[#F0F2F5] mb-2 lg:mb-3 xl:mb-4'>Discover top-rated hotels at unbeatable prices, wherever your journey takes you.</h3>
          <div className='px-2 py-3 bg-white rounded-xl grid md:grid-cols-2  gap-5'>
                <input type="text" className='h-full w-full bg-[#F0F2F5] text-lg tracking-wide poppins-medium border border-black' placeholder='search for cities...' />
            <input type="date"  className='h-full w-full bg-[#F0F2F5] text-lg tracking-wide poppins-medium border border-black' />
            <input type="date"  className='h-full w-full bg-[#F0F2F5] text-lg tracking-wide poppins-medium border border-black' />
            <Link href='/' className='rounded-xl btn grid place-items-center text-lg lg:text-xl tracking-wider poppins-semibold'>
              Search
            </Link>
          </div>
              </div>
              <div className='grid place-items-center'>
                  <Image src={heroImg} alt='hero image hotel' className='w-full object-cover rounded-2xl' />
              </div>
      </div>
      {/* <div className='absolute bg-green-300 container main-container  bottom-[-15px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore at eius. Quisquam, mollitia! Doloremque reiciendis fugiat minus at aperiam.
      </div> */}
    </section>
  )
}

export default Hero