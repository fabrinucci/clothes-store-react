import { useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components';

import { ReactComponent as LeftArrow } from '../../assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/svg/right-arrow.svg';

const Slideshow = ({ 
  children, 
  controls= true, 
  autoplay= true, 
  speed="500", 
  interval="5000"
}) => {
  
  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);

  const next = useCallback(
    () => {
    
      const slide = slideshow.current;
      
      // Check that the first slideshow has elements
      if( slide.children.length > 0 ) {
  
        const firstElement = slide.children[0];
  
        // Slideshow transition
        slide.style.transition = `${speed}ms ease-in-out all`;
  
        const sizeSlide = slide.children[0].offsetWidth;
  
        // Move the Slideshow
        slide.style.transform = `translateX(-${sizeSlide}px)`;
  
        const transition = () => {
          // Reset Slideshow position
          slide.style.transition = `none`;
          slide.style.transform = `translateX(0)`;
  
          // We take the first element and send it to the end
          slide.appendChild(firstElement);
          slide.removeEventListener('transitionend', transition)
        }
  
        slide.addEventListener('transitionend', transition)
      }
    },[speed] )

  const previous = () => {
    const slide = slideshow.current;

    if( slide.children.length > 0 ) {

      const index = slide.children.length - 1;
      const lastElement = slide.children[index];
      slide.insertBefore( lastElement, slide.firstChild)

      slide.style.transition = `none`;
      const sizeSlide = slide.children[0].offsetWidth;
      slide.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout( () => {
        slide.style.transition = `${speed}ms ease-in-out all`;
        slide.style.transform = `translateX(0)`;
      }, 30)
    }
  }
  
  useEffect(() => {
    if( autoplay ) {
      intervalSlideshow.current = setInterval( () => {
        next();
      }, interval);
  
      slideshow.current.addEventListener('mouseenter', () => {
        clearInterval( intervalSlideshow.current );
      })
  
      slideshow.current.addEventListener('mouseleave', () => {
        intervalSlideshow.current = setInterval( () => {
          next();
        }, interval);
      });
    }

  }, [autoplay, interval, next]);
  

  return (
    <MainContainer>
      <SlideshowContainer ref={ slideshow }>
        { children }
      </SlideshowContainer>

      { controls && <Controls>

        <Button 
          onClick={ previous }
        >
          <LeftArrow />
        </Button>

        <Button 
          onClick={ next }
          right
        >
          <RightArrow />
        </Button>

      </Controls> }

      <div>

      </div>

    </MainContainer>
    
  )
}

//* Styled Components

const MainContainer = styled.div`
  position: relative;
  margin: 2rem auto;
  overflow: hidden;
`;

const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 10;
  max-height: 600px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;

const SlideText = styled.div`
  color: ${ props => props.textColor ? props.textColor : 'rgba(0, 0, 0, .5)'};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  top: 0;

  @media screen and (min-width: 360px) {
    top: 25%;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

const Button = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  height: 100%;
  width: 50px;
  text-align: center;
  position: absolute;
  transition: .3s ease all;

  path {
    filter : ${ props => props.right ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
  };

  ${ props => props.right ? 'right: 0' : 'left: 0'}

`;

export { Slideshow, Slide, SlideText }