import { MenuIcon } from 'lucide-react'
import React from 'react'

const Home = () => {
  const students = [
      { name: "Dr. Kolawole Basiru",
        post: "President",
        image: "images/1.jpg"
      },
      { name: "Mr. Femi",
        post: "",
        image: "images/2.jpg"
      },
      { name: "Tunji Taiwo",
        post: "",
        image: "images/3.jpg"
      },
      { name: "Adesoji Adegunwa",
        post: "",
        image: "images/4.jpg"
      },
      { name: "Pastor Wale Ali",
        post: "",
        image: "images/5.jpg"
      },
      { name: "Hon. Abolore",
        post: "",
        image: "images/6.jpg"
      },
      { name: "Mr. Abimbola Adesanya",
        post: "",
        image: "images/7.jpg"
      },
      { name: "Mrs. Lola Oyekan",
        post: "",
        image: "images/8.jpg"
      },
      { name: "Pastor Olumide Asorona",
        post: "",
        image: "images/9.jpg"
      },
      { name: "Mrs. Adesola",
        post: "",
        image: "images/10.jpg"
      },
  ]
  return (
    <div>
        <header className="bg-gradient-to-t from-yellow-500 to-red-900 text-white py-3">
        <div className="flex px-10 justify-between gap-5">
          
            <img src="images/adeolaodutala.jpg" style={{with: "50px", height: "50px"}}/>
            <h1 className="text-xl md:text-2xl font-bold md:font-extrabold">Adeola Odutola College  1994 Alumni</h1>
            
           <MenuIcon className='flex md:hidden'/>

        <div className="hidden md:flex px-5 gap-10">
            <a href="#hero">Home</a>
            <a href="#student">1994 Set Students</a>
            <a href="#hero">Events</a>
        </div>

        <div className="hidden md:flex px-5 gap-10">
            <a href="#hero">Advertise Your Business</a>
            <a href="#course">Sign Up </a>
            <a href="#course">Login</a>
        </div>
        </div>
    </header>

    <section id="hero" className="relative h-[400px]">
       
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('images/college2.jpg')"}}></div>
      
       
        <div className="absolute inset-0 bg-black opacity-50"></div>
      
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className="text-4xl font-bold py-10 uppercase mx-20">ADEOLA ODUTOLA  ALUMNI <br/>1994 SET</h3>
            <p><span className="font-bold"></span> Reunion Platform</p>
          </div>
        </div>
      </section>


      <section id="student" className="px-8 py-10">
        <h3 className="text-3xl text-slate-900 font-bold py-10 text-center">1994 Set</h3>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
           {students.map((student, index )=> (
             <div key={index}>
             <img src={student.image} className="w-[60%] rounded-xl h-[60%] md:w-[250px] md:h-[250px]  mx-[80px] md:mx-[80px]"/>
             <p className="shadow-lg px-3 border-red-800 border-t-2 uppercase text-center"><span className="font-bold">NAME:</span>  <br/>  {student.name} <br/>  <br/>  <span className="font-bold">Contact information:</span> </p>
         </div>
           ))}

            </div>
        </section>

    </div>
  )
}

export default Home