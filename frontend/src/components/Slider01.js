import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider01 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider' style={{height :'50vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} style={{background:'white', borderRadius:'50%'}}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} style={{background:'white', borderRadius:'50%'}}/>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
                <div className='main_row' >

                    <div className='row_img' >
                        <img src={slide.profileImage} alt='travel image' className='image' />
                    </div>

                    <div className='row_des' >
                        <br/><br></br>
                        <h3>{slide.firstName} {slide.lastName}</h3>
                        <br/>
                        <h4>{slide.work} </h4>
                        <h5>({slide.positon})</h5>
                        <br></br>
                        <p>{slide.description}</p>
                    </div>

                </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider01;