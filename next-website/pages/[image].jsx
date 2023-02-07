// Map any Route with the url /home/[image] inside [image].js
import { useRouter } from 'next/router';

const fullScreenImage = () => {
  const router = useRouter(); // access product id route parameter

  // Rendering id as part of the jsx:
  const number = router.query.image;
  return <div>Details about Image {number}</div>;
};

export default fullScreenImage;
