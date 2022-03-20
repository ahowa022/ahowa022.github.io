import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src='images/java_logo_640.jpg'
              text='Java Projects I developed since high-school'
              label='Java'
              path={{ pathname: "https://github.com/ahowa022/AssaadHowayek/tree/main/Java%20Projects" }}
            />
            <CardItem
              src='images/android.png'
              text='Clinic and Patients Mobile Applicaton. Used Android Studio with Java back-end and Firebase database'
              label='Android App'
              path={{ pathname: "https://github.com/ahowa022/AssaadHowayek/tree/main/Android%20Studio%20Application" }}
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/python.png'
              text='Python applications I worked on in University'
              label='Python'
              path={{ pathname: "https://github.com/ahowa022/AssaadHowayek/tree/main/Python%20Projects" }}
            />
            <CardItem
              src='images/fpga.jpg'
              text='My VHDL projects that I tested with an FPGA and with ModelSim'
              label='Hardware'
              path={{ pathname: "https://github.com/ahowa022/AssaadHowayek/tree/main/Hardware%20(FPGA)" }}
            />
          </ul>
        </div>
      </div>
  );
}

export default Cards;