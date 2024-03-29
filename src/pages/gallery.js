import React from 'react'
import Gallery from '@/components/Gallery'
import Image from 'next/image'

const gallery = () => {
  const galleryImages = [
    {
        src: '/images/gallery1.jpg'
    },
    {
        src: '/images/gallery2.jpg'
    },
    {
        src: '/images/gallery3.jpg'
    },
    {
        src: '/images/gallery4.jpg'
    },

    {
      src: '/images/gallery5.jpg'
  },
  {
    src: '/images/gallery6.jpg'
},
{
  src: '/images/gallery7.jpg'
},
{
  src: '/images/gallery8.jpg'
},
{
  src: '/images/gallery9.jpg'
},
{
  src: '/images/gallery10.jpg'
},
{
  src: '/images/gallery11.jpg'
},
{
  src: '/images/gallery12.jpg'
},
{
  src: '/images/gallery13.jpg'
},
{
  src: '/images/gallery14.jpg'
},
{
  src: '/images/gallery15.jpg'
},
{
  src: '/images/gallery16.jpg'
},
{
  src: '/images/gallery17.jpg'
},
{
  src: '/images/gallery18.jpg'
},
{
  src: '/images/gallery19.jpg'
},
{
  src: '/images/gallery20.jpg'
},
{
  src: '/images/gallery21.jpg'
},
{
  src: '/images/gallery22.jpg'
},
{
  src: '/images/gallery23.jpg'
},
{
  src: '/images/gallery24.jpg'
},
{
  src: '/images/gallery25.jpg'
},
{
  src: '/images/gallery26.jpg'
},
{
  src: '/images/gallery27.jpg'
},
{
  src: '/images/gallery28.jpg'
},
{
  src: '/images/gallery29.jpg'
},
{
  src: '/images/gallery30.jpg'
},
{
  src: '/images/gallery31.jpg'
},
{
  src: '/images/gallery32.jpg'
},
{
  src: '/images/gallery33.jpg'
},
{
  src: '/images/gallery34.jpg'
},
{
  src: '/images/gallery35.jpg'
},
{
  src: '/images/gallery36.jpg'
},
{
  src: '/images/gallery37.jpg'
},
{
  src: '/images/gallery38.jpg'
},
{
  src: '/images/gallery39.jpg'
},
{
  src: '/images/gallery40.jpg'
},
{
    src: '/images/gallery40.jpg'
  },
  {
    src: '/images/gallery41.jpg'
  },
  {
      src: '/images/gallery42.jpg'
    },
    {
      src: '/images/gallery43.jpg'
    },
    {
      src: '/images/gallery44.jpg'
    },{
      src: '/images/gallery45.jpg'
    },
    {
      src: '/images/gallery46.jpg'
    },
    {
      src: '/images/gallery47.jpg'
    },
    {
      src: '/images/gallery48.jpg'
    },
    {
      src: '/images/gallery49.jpg'
    },
    {
      src: '/images/gallery50.jpg'
    },
    {
      src: '/images/gallery51.jpg'
    },
    {
      src: '/images/gallery52.jpg'
    },
    {
      src: '/images/gallery53.jpg'
    },
    {
      src: '/images/gallery54.jpg'
    },
    {
      src: '/images/gallery56.jpg'
    },
    {
      src: '/images/gallery57.jpg'
    },
    {
      src: '/images/gallery58.jpg'
    },
    {
      src: '/images/gallery59.jpg'
    },
    {
      src: '/images/gallery61.jpg'
    },
    {
      src: '/images/gallery62.jpg'
    },
    {
      src: '/images/gallery63.jpg'
    },
    {
      src: '/images/gallery64.jpg'
    },
    {
      src: '/images/gallery65.jpg'
    },
    {
      src: '/images/gallery66.jpg'
    },
    {
      src: '/images/gallery67.jpg'
    },
    {
      src: '/images/gallery68.jpg'
    },
    {
      src: '/images/gallery70.jpg'
    },
    {
      src: '/images/gallery71.jpg'
    },
    {
      src: '/images/gallery72.jpg'
    },
    {
      src: '/images/gallery69.jpg'
    },

]

  return (
    <div>

        
        <Gallery />
        
    
    

    <div className=' mx-[60px] md:mx-[30px] grid grid-cols-1 md:grid-cols-4 gap-2'>
      {galleryImages.map(image=> (
        <Image src={image.src} width={200} height={200} alt="gallery image" className='w-[300px] h-[300px]' />
      ))}
      </div>
    </div>
  )
}

export default gallery