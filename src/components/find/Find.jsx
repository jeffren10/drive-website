import React from 'react'
import styles from './Find.module.css'
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css'
 import 'swiper'

const Find = () => {
  return (
    
    <div className={styles.Find}>
        <div className={styles.heading}>
          <h1>Find your drive</h1> 
          <div className={styles.text_bg}> 
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
          </div>
        </div>


        <div className={styles.slider_container}>
        <Swiper
           spaceBetween={10}
           slidesPerView={5}
            navigation
            
          

           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)}
         >
       
          <SwiperSlide>
            <Card image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaWFiuO9wzHFbzMXZ0Ual0GW2FkgUJ5fAYw&usqp=CAU'make='Audi'/>  </SwiperSlide>
          <SwiperSlide>
            <Card image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.787xw:0.589xh;0.0737xw,0.260xh&resize=1200:*' make='Bmw' /> </SwiperSlide>
          <SwiperSlide>
            <Card image='https://w7.pngwing.com/pngs/237/508/png-transparent-2013-chevrolet-camaro-2014-chevrolet-camaro-car-chevrolet-chevelle-chevrolet-vehicle-classic-cars-exotic-cars.png' make='chevrolex' /> </SwiperSlide>
          <SwiperSlide>
            <Card image='https://static.cargurus.com/images/forsale/2023/08/18/21/12/2021_chevrolet_corvette-pic-2555344073136080652-1024x768.jpeg'
                make='sport car'  />
                        
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://t4.ftcdn.net/jpg/05/04/43/39/360_F_504433909_g9BsjaPbNOTfauN1Lqpi7wet3ZBd4Exw.jpg' 
                make='mercedes Benz' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/G-ClassModelImage.jpg&w=730&h=484&q=75&c=1' make='G wagon' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://www.skitowntransportation.com/wp-content/uploads/2015/11/car-5.jpg' make='Luxury suv'/>
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://imgd.aeplcdn.com/272x153/n/cw/ec/54437/2021-wrangler-exterior-right-front-three-quarter.jpeg?q=80&q=80' make='Jeep'/>
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://www.carscoops.com/wp-content/uploads/2023/02/2024-Ford-Edge-L-main.jpg' make='Ford'/>
          </SwiperSlide>
           <SwiperSlide>
              <Card image='data:image/jpeg;base64,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'
                  make='Toyata' />
            </SwiperSlide> 
          
      </Swiper>
        </div>
    </div>
  );
};

export default Find