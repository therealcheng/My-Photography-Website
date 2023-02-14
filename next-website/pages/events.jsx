import NavbarNext from '@/components/NavbarNext';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import eventImages from '../data/photosEvents';

const Events = () => {
  return (
    <>
      <NavbarNext />
      <Gallery images={eventImages} />
      <Footer home={false} />
    </>
  );
};

export default Events;
