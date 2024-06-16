import React, { useRef } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  rating,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon, StarIcon  } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, FeatureCards, TeamCard } from "@/widgets/cards";
import { featuresData, featuresDatas, teamData, contactData, datanb, dataadidas, datajordan, dataconvers } from "@/data";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom";

export function Product() {
  const navigate = useNavigate();

   const handleCardClick = (title, category) => {
    navigate(`/product-detail/${category}/${title}`);
  };

  const nbSectionRef = useRef(null);

  // Fungsi untuk menggulir ke bagian New Balance
  const scrollToNBSection = () => {
    nbSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center">
        <div className="" />
        <img src="/img/product.png" alt="" className="absolute w-full object-cover" style={{ height:'550px'}}/>

        <div></div>
        <div className="">
        <div className="absolute text-center text-white">
            <div className="">
              <div className="">
              <Typography
                variant="h1"
                color="white"
                position="fixed"
                className="mb-6 font-white font-poppins mx-auto" style={{display:'flex', justifyContent:'flex-start', alignItems:'center', color:'white',  fontSize:'40px', marginTop:'-80px'}}>
                OUR PRODUCTS
        
              </Typography>
              <Typography variant="lead" color="white" className="font-poppins" style={{marginTop:'-30px', marginLeft:'60px',fontSize:'20px', color:'white'}}>
              OUR NEW ARRIVALS           
              </Typography>
              <Link to="/product" onClick={scrollToNBSection}>
              <button type="button" class="text-white-900 hover:text-white border border-white-800 hover:bg-white-900 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white-600 dark:text-white-400 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800"
              style={{marginLeft:'0px', marginTop:'10px', color:'white'}} position="absolute">Shop Now</button> 
              </Link>
              </div>  
               <div style={{ position: 'absolute', left: '-120px', top: '215px', zIndex: '1000' }}>
                        <img src="/img/authen.png" width="220px" />
                  </div>
            </div>
            </div>
           
        
          </div>
          
        </div>
    
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
        <div style={{marginTop:'-420px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/discover.png" width={'700px'} style={{ marginBottom: '-440px' }} />
        </div>

       
          <PageTitle>
        <div className="font-poppins" style={{width:'900px', marginLeft:'-180px', textAlign:'center'}}>
          where authenticity meets excellence. With an unparalleled selection, quality assurance, exclusive deals, personalized experiences, and guaranteed satisfaction, we're your go-to for footwear, including authentically certified shoes. From classic kicks to trendy styles, each pair undergoes rigorous checks for durability and comfort. Enjoy seamless browsing, swift delivery, and hassle-free returns, making every step stylish and satisfying.</div>
          </PageTitle>


          <div style={{marginTop:'-330px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/banner_nb.png" className="absolute w-full object-cover" width={'2100px'} style={{ marginBottom: '-440px' }} />
        </div>

      <div style={{marginTop:'70px'}}  ref={nbSectionRef}>
        <PageTitle heading="New Balance" className="font-poppins"/>
        <PageTitle section="Product"/>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {datanb.map(({ category, title, img, rating, description }) => (
          <FeatureCards
            category={category}
            title={title}
            img={img} 
            rating={rating}
            description={description}
            onClick={() => handleCardClick(title, category)} // Memanggil fungsi handleCardClick dengan title dan category
          />
        ))}

          </div>
          </div>
      </section>

      <section className="px-4 pt-20 pb-48">
      <div className="container mx-auto">
          <div style={{marginTop:'-630px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/banner_adidas.png" className="absolute w-full object-cover" width={'2100px'} style={{ marginBottom: '-440px' }} />
        </div>

      <div style={{marginTop:'70px'}} >
        <PageTitle heading="Adidas" className="font-poppins"/>
        <PageTitle section="Product"/>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
             {dataadidas.map(({ category, title, img, rating, description }) => (
            <FeatureCards
              category={category}
              title={title}
              img={img}
              rating={rating}
              description={description}
              onClick={() => handleCardClick(title, category)} // Memanggil fungsi handleCardClick dengan title dan category
            />
          ))}
          </div>
          </div>
      </section>  

      <section className="px-4 pt-20 pb-48">
      <div className="container mx-auto">
          <div style={{marginTop:'-630px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/banner_converse.png" className="absolute w-full object-cover" width={'2100px'} style={{ marginBottom: '-440px' }} />
        </div>

      <div style={{marginTop:'70px'}} >
        <PageTitle heading="Converse" className="font-poppins"/>
        <PageTitle section="Product"/>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {dataconvers.map(({ category, title, img, rating, description }) => (
            <FeatureCards
              category={category}
              title={title}
              img={img}
              rating={rating}
              description={description}
              onClick={() => handleCardClick(title, category)} // Memanggil fungsi handleCardClick dengan title dan category
            />
          ))}
          </div>
          </div>
      </section>  

      <section className="px-4 pt-20 pb-48">
      <div className="container mx-auto">
          <div style={{marginTop:'-630px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/banner_jordan.png" className="absolute w-full object-cover" width={'2100px'} style={{ marginBottom: '-440px' }} />
        </div>

      <div style={{marginTop:'70px'}} >
        <PageTitle heading="Nike Jordan" className="font-poppins"/>
        <PageTitle section="Product"/>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {datajordan.map(({ category, title, img, rating, description }) => (
            <FeatureCards
              category={category}
              title={title}
              img={img}
              rating={rating}
              description={description}
              onClick={() => handleCardClick(title, category)} // Memanggil fungsi handleCardClick dengan title dan category
            />
          ))}
          </div>
          </div>
      </section>  
      

      
      <div className="bg-white" style={{marginTop:'-140px'}} >
        <Footer />
      </div>
    </>
  );
}

export default Product;
    