import Business from "@/components/Business";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Home = () => {
  const presidents = [
    {
      name: "",
      profile:
        "Pharm. Babatunde Busari.  Pioneer President AOCOSA'94 set 2014 - 2019. Since its founding in 2014, the Adeola Odutola College Ijebu ode Ogun State 1994 old students Association has been led by three visionary presidents. Pharm. Babatunde Busari was the first president of the association, serving from 2014 to 2019. During his tenure, Pharm. Busari laid the foundation for the association, establishing its mission and vision, and setting up its organizational structure. He also led efforts to build a strong alumni network and establish connections with the school administration. Under his leadership, the association made significant strides in promoting educational excellence and fostering a spirit of love.",
      picture: "/images/4.jpg",
    },

    {
      name: "",
      profile:
        "Magistrate Bukky Raheem-Alejo.  President AOCOSA'94 set  2019 - 2022. The second president of the association, Magistrate Bukky Raheem-Alejo, took office in 2019 and served until 2022. Magistrate Raheem-Alejo continued the work of her predecessor, strengthening the association's relationship with the school and expanding its reach through social media. She also focused on increasing the association's membership and developing new initiatives to support students. Under her leadership, the association established a mentorship program and hosted a number of successful events.",
      picture: "/images/president2.jpg",
    },
    {
      name: "",
      profile:
        "Alhaji ( Dr.) Bisiriyu Kolawole Fatai.   President AOCOSA'94  2022 - Till date. The current president, Alhaji (Dr) Bisiriyu Kolawole Fatai, took office in 2022. He is a highly accomplished individual who PhD in Accounting. Alhaji (Dr) Bisiriyu Kolawole Fatai is an impressive individual who has achieved great success in his career. He is a highly respected leader in the community, and his dedication to service is an inspiration to all. His education and professional background are impressive, and he has used his skills and experience to make a positive impact in his community.\n \n ",
      profile2:
        "Alhaji (Dr) Fatai has a Doctorate in Accounting , and he is a passionate advocate for economic development and entrepreneurship.Alhaji (Dr) Bisiriyu Kolawole Fatai's tenure as president of AOCOSA '94 set has been marked by a renewed sense of purpose and energy. He has set a clear vision for the association, which includes expanding its reach and enhancing its programs and services. His commitment to excellence and quality",
      picture: "/images/president1.jpg",
    },
  ];
  const students = [
    // { name: "Mr. Femi",
    //   post: "",
    //   image: "images/2.jpg"
    // },
    {
      name: "Tunji Taiwo Olatunji",
      post: "",
      Age: "29th July 1975",
      Marital: "Married",
      Location: "Abeokuta",
      image: "images/3.jpg",
      Email: "olatunjius@yahoo.com",
      phone: "08034128121, 08026312581",
      WorkAddress:
        "Ogun State Government, Ogun State Planning and Development Permit Authority, Oke Mosan",
    },
    // { name: "Adesoji Adegunwa",
    //   post: "",
    //   image: "images/4.jpg"
    // },
    { name: "Mr Adesoji Adegunwa", post: "", image: "images/5.jpg" },
    { name: "Pastor Wale Alli", post: "", image: "images/6.jpg" },
    // { name: "Mr. Abimbola Adesanya",
    //   post: "",
    //   image: "images/7.jpg"
    // },
    // { name: "Mrs. Lola Oyekan",
    //   post: "",
    //   image: "images/8.jpg"
    // },
    { name: "Mrs Mopelola Oyekan", post: "", image: "images/9.jpg" },
    { name: "Pastor Asorona Olumide", post: "", image: "images/10.jpg" },
    {
      name: "Adelalu Adelalu Emmanuel",
      post: "",
      Age: "February 14, 1974",
      Marital: "Married",
      Location: "Abeokuta",
      image: "images/adelalu.jpg",
      Email: "adetolaadelalu14@gmail.com",
      phone: "08066544700",
      WorkAddress:
        "Ijebu Ode Ogun State",
    },

    {
      name: "Osigbiyan Gabriel Edewoh",
      post: "",
      Age: "--1974",
      Marital: "Married",
      Location: "Ijebu-Ode, Nigeria",
      image: "images/osigbiyan.jpg",
      Email: "edafella74@gmail.com",
      phone: "09048743371, 09032315136",
      WorkAddress:
        "9, Adeola Odutola College Road, Adjacent to 911, Beside Former Car Wash",
    },
    {
      name: "Jaiyesimi Abimbola Karimot",
      post: "",
      Age: "20th May, 1976",
      Marital: "Married",
      Location: "Lagos",
      image: "images/jaiyesimi.jpg",
      Email: "abimbola20012001@gmail.com",
      phone: "08083979000, 08182425330",
      WorkAddress:
        "Lagos State Government, Ministry of Information and Strategy Secretariat Alausa Ikeja Lagos",
    },
    {
      name: "Ayodeji Keshinro",
      post: "",
      Age: "----1977",
      Marital: "Married",
      Location: "London",
      image: "images/ayodeji.jpg",
      Email: "dejikesh2000@yahoo.com",
      phone: "07496908568",
      WorkAddress:
        "",
    },
  ];
  return (
    <div>
      <section id="hero" className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/gallery21.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className="text-4xl font-bold py-10 uppercase mx-20">
              ADEOLA ODUTOLA ALUMNI <br />
              1994 SET
            </h3>
            <p>
              <span className="font-bold"></span> Reunion Platform
            </p>
            <p className="text-3xl font-bold">
              Please pay your dues at Provided Bank Details: <br /> Union Bank,{" "}
              <br /> Account No 0060662652, <br />
              Account Name: Adeola Odutola College Old Students Association{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-[140px]">
        <h3 className="text-center text-3xl font-bold">
          History Of Adeola Odutola College
        </h3>
        <p className="px-5 py-5 text-justify animate__animated animate__rotateIn">
          ADEOLA ODUTOLA COLLEGE PRIVATE, a co-educational secondary
          institution, the first voluntary Agency Comprehensive High School in
          the former Western Region of Nigeria was officially opened on 28th
          February, 1964.{" "}
        </p>
        <p className="px-5 py-5 text-justify">
          It was formed from the merger of Olu-Iwa College and Ijebu-Ode
          Secondary Commercial School both founded in 1948 and 1945
          respectively. Adeola Odutola College is situated on a table land on
          the Adeola Odutola College Road in Ijebu-Ode.{" "}
        </p>
        <p className="px-5 py-5 text-justify">
          With Government takeover of Schools in 1975, Chief (Dr.) Timothy
          Adeola Odutola, the Ogbeni Oja of Ijebu-Ode, the founder, conceded the
          giant institution to the Ogun State Government free of charge without
          receiving any compensation. Since then the school had been citadel of
          learning to all interested girls and boys for a sound academic
          pursuit.{" "}
        </p>
        <p className="px-5 py-5 text-justify">
          The school had turned out good number of distinguished professionals,
          scholars and entrepreneur of high repute in all works of life
          throughout the nooks and crannies of the nation.{" "}
        </p>
        <p className="px-5 py-5 text-justify">
          Over the years, the expanded, students’ population coupled with
          inadequate instructional materials and lack of laboratory equipment
          had made teachers’ efforts uncomplimentary as a result of the low ebb
          of academic performance of the school.{" "}
        </p>
        <p className="px-5 py-5 text-justify animate__animated animate__bounce">
          In 2009, the Ogun State Government resolved to return the former
          privately owned institutions to their original owners. The dynasty of
          Chief (Dr.) Timothy Adeola Odutola embraced this opportunity to take
          back the school and bring to bare the founding fathers aura for
          academic excellence through the provision of adequate science
          laboratories facilities, low student-teacher ratio, attractive and
          conducive learning environment with highly qualified and diligent
          staff and high premium on Information and Communication Technology. On
          the return of the school, admission of students was allowed into J.S.
          1 and S.S. 1 for 2010/2011 academic session.
        </p>
      </section>

      <section id="student" className="px-8 py-[140px]">
        <h3 className="text-3xl text-slate-200 font-bold py-5 text-center bg-gradient-to-t from-yellow-400 to-red-900 px-2 mb-5">
          AOCOSA 94 Set Presidents, 2014 - Present
        </h3>

        <div className="grid grid-cols-1 gap-[80px] md:grid-cols-3">
          {presidents.map((student, index) => (
            <div key={index}>
              <img
                src={student.picture}
                className="w-[60%] rounded-xl h-[40%] md:w-[250px] md:h-[250px]  mx-[80px] md:mx-[80px]"
              />
              <p className="text-justify">{student.profile}</p>
              <p className="text-justify">{student.profile2}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-10 my-10">
        <Image src="/images/happy.jpg" className="rounded-lg px-20" width={900} height={300}/>
      </section>

      <section id="student" className="px-8 py-10">
        <h3 className="text-3xl text-slate-200 font-bold py-5 text-center shadow-lg mb-10 bg-gradient-to-t from-yellow-400 to-red-900">
        AOCOSA 94 Set
        </h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {students.map((student, index) => (
            <div key={index} className="my-10">
              <img
                src={student.image}
                className="w-[60%] rounded-xl h-[60%] md:w-[250px] md:h-[250px]  mx-[80px] md:mx-[80px]"
              />
              <div className="shadow-lg px-3 border-red-800 border-t-2 uppercase text-center">
               
                <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                       <span className="font-bold">{student.name}</span> <br />
                    
                    </div>
                    <div className="collapse-content">
                      
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      <p className="font-bold">Contact Information</p>
                    </div>
                    <div className="collapse-content capitalize">
                      
                      <p><span className="font-bold">Location: </span>{student?.Location}</p>
                      <p><span>Phone</span> -  {student?.phone}</p>
                      <p><span>Email</span> - <span className="lowercase">{student?.Email}</span></p>
                      <p><span>Work Address:</span> {student?.WorkAddress}</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      <p className="font-bold">Other Details</p>
                    </div>
                    <div className="collapse-content  capitalize">
                     
                      <p><span>Marital Status - </span> {student?.Marital}</p>
                      <p><span> Birthday - </span> {student?.Age}</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>

      

      <section className="py-10 mx-10">
      <h3 className="text-3xl text-slate-200 font-bold py-5 text-center shadow-lg mb-10 bg-gradient-to-t from-yellow-400 to-red-900">
        AOCOSA 94 Set Members Businesses
        </h3>
        <Business/>
      </section>
    </div>
  );
};

export default Home;
