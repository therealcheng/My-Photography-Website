import Link from 'next/link';
import { FiArrowUpLeft } from 'react-icons/fi';

const HomeLink = () => {
  return (
    <div>
      <Link href='/'>
        <FiArrowUpLeft />
      </Link>
      <Link href='/'>Back to Home</Link>
    </div>
  );
};

export default HomeLink;
