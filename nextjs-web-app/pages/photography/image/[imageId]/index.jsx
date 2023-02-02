import { useRouter } from 'next/router';
import Link from 'next/link';

const Image = () => {
  const router = useRouter();
  const imageId = router.query.imageId; // same as file name [imageId]
  return <div>Full screen {imageId}</div>;
};

export default Image;
