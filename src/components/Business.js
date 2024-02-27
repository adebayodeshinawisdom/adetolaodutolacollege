import { PhoneCallIcon } from 'lucide-react'
import React from 'react'

const Business = () => {
    const business = [
        {
            name: "",
            image1: "/images/stabilizer.jpg",
            image2: "/images/stabilizer2.jpg",
            phone: "09048743371, 09032315136"
        },
        {
            name: "Olayemi David Abiodun",
            profile: "I am a professional dog breeder, we import and export dogs of any type of breed",
            owner: "Olayemi David Abiodun",
            image1: "/images/olayemi.jpg",
            image2: "/images/olayemi2.jpg",
            phone: "08062742677, 08056184523"
        },
        {
            name: "Softground Properties & Estate Consultants",
            owner: "Hakeem Ogunbade",
            profile: "For Properties Solution & Consultancy Contact Hekeem Ogunbade",
            image1: "/images/properties.jpg",
            image2: "/images/",
            address: "Magodo GRA, Shangisha, Lagos, Nigeria ",
            phone: "09048743371, 09032315136"
        },
        

    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {business.map(business => (
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={business.image1} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">{business.owner}</h2>
              <p>{business.profile}</p>
              {business?.address? (<p> Office Address: {business.address}</p>): ''}
              <div className="card-actions justify-end">

                <p className='flex gap-3'> <PhoneCallIcon/> {business.phone}</p>
              </div>
            </div>
          </div>
        ))}

    </div>
  )
}

export default Business