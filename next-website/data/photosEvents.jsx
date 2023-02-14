import img1 from '../public/eventImages/1.jpg';
import img2 from '../public/eventImages/2.jpg';
import img3 from '../public/eventImages/3.jpg';
import img4 from '../public/eventImages/4.jpg';
import img5 from '../public/eventImages/5.jpg';
import img6 from '../public/eventImages/6.jpg';
import img7 from '../public/eventImages/7.jpg';

let eventImages = [];
let src = [img1, img2, img3, img4, img5, img6, img7];
for (let i = 1; i < 7; i++) {
  src.push({
    id: i,
    alt: `image ${i}`,
    src: src[i],
  });
}

for (let i = 1; i < 7; i++) {
  eventImages.push({
    id: i,
    alt: `image ${i}`,
    src: src[i],
  });
}

export default eventImages;
