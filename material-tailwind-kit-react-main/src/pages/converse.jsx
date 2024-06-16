import React from "react";
import { Link } from 'react-router-dom';

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
import { featuresData, featuresDatas, teamData, contactData,  datajordan, dataconvers } from "@/data";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export function Converse() {
  const navigate = useNavigate();

  const handleCardClick = (title, category) => {
   navigate(`/product-detail/${category}/${title}`);
 };
  return (
    <>
    <div style={{marginTop:'-60px'}}>
     <div className="px-4 pt-20 pb-48">
      <div className="container mx-auto" style={{ marginLeft: '80px', position: 'absolute' }}>
        <h4 className="font-poppins">
          <Link to="/home">Home</Link> {'>'} Converse
        </h4>
      </div>
    </div>  


    <section className="px-1 pt-8">
        <div className="container mx-auto">
          <div style={{marginTop:'-600px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/converse/converse_banner.png" className="absolute w-full object-cover" width={'2100px'} style={{ marginBottom: '-440px' }} />
        </div>
        </div>
        </section>
        </div>
            
            <Typography variant="lead" color="black" className="font-poppins" style={{marginTop:'30px',marginLeft:'100px', fontSize:'30px', color:'black'}}>
             Converse    
              </Typography>
       
         
      <div style={{marginTop:'-40px'}} >
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 container mx-auto" style={{padding:'30px'}} >
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

          <div style={{marginTop:'-40px'}} >
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 container mx-auto" style={{padding:'30px'}} >
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

          <div style={{marginTop:'-40px'}} >
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 container mx-auto" style={{padding:'30px'}} >
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

          <div style={{marginTop:'-40px'}} >
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 container mx-auto" style={{padding:'30px'}} >
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
 

      

      
      <div className="bg-white" style={{marginTop:'40px'}} >
        <Footer />
      </div>
    </>
  );
}

export default Converse;
    