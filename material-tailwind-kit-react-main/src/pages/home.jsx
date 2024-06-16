import React from "react";

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
import { PageTitle, Footer, ScrollToTop } from "@/widgets/layout";
import { FeatureCard, FeatureCards, TeamCard } from "@/widgets/cards";
import { featuresData, featuresDatas, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";

export function Home() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} className="w-5 h-5 text-black-500 text-4xl" />);
    }
    return stars;
  };


  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
      <img src="/img/bg_home.svg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{Top:'15dp', height:'580px'}}/>
        <div className="absolute top-0 h-full w-full bg-white/60 bg-cover bg-center" />
        <div className="max-w-6xl container relative mx-auto">
          <div className="flex flex-wrap items-center" style={{alignItems:'center'}}>
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12" style={{ marginTop:'-120px', alignItems:'center', marginLeft:'120px'}}>
              <div  style={{textAlign:'center'}}>
              <Typography
                variant="h1"
                color="white"
                position="fixed"
                className="mb-6 font-black" style={{display:'flex', justifyContent:'flex-start', alignItems:'center', color:'black'}}>
                 NEW
                  
                  <Typography type="bold" className="font-poppins" style={{fontSize:'50px', color:'black', fontWeight:'initial'}}>
                  &nbsp;COLLECTION</Typography> 

                  <img src="public\img\sepatuhome.png"  width={'450px'} style={{marginTop:'-70px',marginBottom:'-140px'}}/>
              </Typography>
              <Typography variant="lead" color="white" className="font-poppins" style={{marginTop:'-80px',marginLeft:'100px', fontSize:'20px', color:'black'}}>
              GRAB YOUR PAIR TODAY             
              </Typography>
              <Link to="/product">
              <button type="button" class="text-center lg:w-2/12 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              style={{marginLeft:'-300px',marginTop:'10px'}} position="fixed">Shop Now</button>
              </Link> 
              </div>  
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-24 bg-white px-4 pb-10 pt-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map(({ color, title, img, description}) => (
              <FeatureCard
    
                img={img}
              />
            ))}
          </div>

          <div style={{marginTop:'-350px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/img/sneak.png" width={'700px'} style={{ marginBottom: '-440px' }} />
        </div>

           <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 font-poppins">
           {featuresDatas.map(({ color, title, img, rating, description }) => (
            <div
              key={title}
              className="rounded-lg shadow-lg shadow-gray-500/10"
              style={{
            
                padding: '10px',
                marginBottom: '5px',
                alignItems:'center',
                textAlign:'center',
              }}>
              <div style={{ backgroundColor: color, height:'200px'}}>
                <Link to="/product">
              <img
                src={img}
                alt={title}
                className="mx-auto item-menu"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              </Link>
              </div>
              <div style={{padding:'15px'}}>
                <h3>{title}</h3>
                <p className="flex justify-center mt-1 mb-2">{renderStars(rating)}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
          </div>
          </div>
          
      </section>
      <div className="bg-white">
        <Footer />
      </div>

      <ScrollToTop /> 
    </>
  );
}

export default Home;
