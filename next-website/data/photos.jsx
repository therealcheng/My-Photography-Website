import img1 from '../public/concertImages/img-1.jpg';
import img2 from '../public/concertImages/img-2.jpg';
import img3 from '../public/concertImages/img-3.jpg';
import img4 from '../public/concertImages/img-4.jpg';
import img5 from '../public/concertImages/img-5.jpg';
import img6 from '../public/concertImages/img-6.jpg';

let images = [];
const src = [img1, img2, img3, img4, img5, img6];

for (let i = 1; i < 31; i++) {
  images.push({
    id: i,
    alt: `image ${i}`,
    src: src[i],
  });
}

console.log(images);

export default images;
