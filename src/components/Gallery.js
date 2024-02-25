// Import the required React and component modules
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Define the CarouselDemo component
const CarouselDemo = () => {
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

]

  return (
    <Carousel className="w-[300px] md:w-[600px]  mx-[60px] md:mx-[400px]">
      {/* Carousel Content */}
      <CarouselContent>
        {galleryImages.map((image, index) => (
          <CarouselItem key={index}>
            {/* Carousel Item Content */}
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image  src={image.src} width={400} height={500} alt={index} className="w-full"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Navigation Controls */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

// Export the CarouselDemo component
export default CarouselDemo;
