import Modal from '@/components/Modal';
import CarouselBleed from '@/components/CarouselBleed';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Welcome to my photography website! I have always had a passion for
        capturing memories through the lens of a camera, starting from my early
        childhood when I would snap photos of anything and everything that
        caught my eye. My love for photography really took off when I was given
        a Canon DSLR (60D) and I started to take my hobby more seriously. During
        my time at university, I had the opportunity to work for friends and
        university societies, which gave me the chance to hone my skills and
        gain valuable experience. Over the last year, my main focus has been on
        event and concert photography. This work has been incredibly rewarding
        and has pushed me creatively, allowing me to develop my own unique style
        and approach to photography. I'm excited to share my work with you and
        hope that you enjoy browsing through my portfolio.
      </p>
      <Modal />
      <CarouselBleed />
    </div>
  );
};

export default About;
