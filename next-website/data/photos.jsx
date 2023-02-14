import img1 from '../public/concertImages/img-1.jpg';
import img2 from '../public/concertImages/img-2.jpg';
import img3 from '../public/concertImages/img-3.jpg';
import img4 from '../public/concertImages/img-4.jpg';
import img5 from '../public/concertImages/img-5.jpg';
import img6 from '../public/concertImages/img-6.jpg';
import img7 from '../public/concertImages/img-7.jpg';
import img8 from '../public/concertImages/img-8.jpg';
import img9 from '../public/concertImages/img-9.jpg';
import img10 from '../public/concertImages/img-10.jpg';
import img11 from '../public/concertImages/img-11.jpg';
import img12 from '../public/concertImages/img-12.jpg';
import img13 from '../public/concertImages/img-13.jpg';
import img14 from '../public/concertImages/img-14.jpg';
import img15 from '../public/concertImages/img-15.jpg';
import img16 from '../public/concertImages/img-16.jpg';
import img17 from '../public/concertImages/img-17.jpg';
import img18 from '../public/concertImages/img-18.jpg';
import img19 from '../public/concertImages/img-19.jpg';
import img20 from '../public/concertImages/img-20.jpg';
import img21 from '../public/concertImages/img-21.jpg';
import img22 from '../public/concertImages/img-22.jpg';
import img23 from '../public/concertImages/img-23.jpg';
import img24 from '../public/concertImages/img-24.jpg';
import img25 from '../public/concertImages/img-25.jpg';
import img26 from '../public/concertImages/img-26.jpg';
import img27 from '../public/concertImages/img-27.jpg';
import img28 from '../public/concertImages/img-28.jpg';
import img29 from '../public/concertImages/img-29.jpg';
import img30 from '../public/concertImages/img-30.jpg';

let images = [];
let src = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
];
for (let i = 1; i < 30; i++) {
  src.push({
    id: i,
    alt: `image ${i}`,
    src: src[i],
  });
}

for (let i = 1; i < 30; i++) {
  images.push({
    id: i,
    alt: `image ${i}`,
    src: src[i],
  });
}

export default images;
