// Map any Route with the url /home/[image] inside [image].js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const fullScreenImage = () => {
  const router = useRouter(); // access product id route parameter

  // Rendering id as part of the jsx:
  const number = router.query.image;
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      Details about Image {number}
    </motion.div>
  );
};

export default fullScreenImage;
