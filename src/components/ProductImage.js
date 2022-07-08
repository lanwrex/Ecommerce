import React,{ useState } from 'react'
import pic1 from '../images/image-product-1-thumbnail.jpg'
import pic2 from '../images/image-product-2-thumbnail.jpg'
import pic3 from '../images/image-product-3-thumbnail.jpg'
import pic4 from '../images/image-product-4-thumbnail.jpg'
import img1 from '../images/image-product-1.jpg';
 import img2 from '../images/image-product-2.jpg';
 import img3 from '../images/image-product-3.jpg';
 import img4 from '../images/image-product-4.jpg';
import Previous from '../images/icon-previous.svg'
import Next from '../images/icon-next.svg'
// import pics from '../image'
function ProductImage() {
  const [image, setImage] = useState(0)
  const shoe = [img1, img2, img3, img4]
  
 
  return (
    <div className='relative md:mt-96 lg:mt-0'>
      <img
        aria-label='Product Picture'
        alt='Product Preview'
        className='mb-5 md:rounded-lg'
        src={shoe[image]}
      />
      <div
        aria-label='Product Thumbnails'
        className='mb-10 hidden items-center justify-between gap-3 overflow-auto md:flex'
      >
        <img
          alt='Product Thumbnail'
          onClick={() => setImage(0)}
          className='imgThumbnail w-[100px]  cursor-pointer rounded-lg border-orange-400 hover:border-4 hover:brightness-110'
          src={pic1}
        />
        <img
          alt='Product Thumbnail'
          onClick={() => setImage(1)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-orange-400 hover:border-4 hover:brightness-110'
          src={pic2}
        />
        <img
          alt='Product Thumbnail'
          onClick={() => setImage(2)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-orange-400 hover:border-4 hover:brightness-110'
          src={pic3}
        />
        <img
          alt='Product Thumbnail'
          onClick={() => setImage(3)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-orange-400 hover:border-4 hover:brightness-110'
          src={pic4}
        />
      </div>
      <div
       onClick={() => {
        image > 0 && setImage(image - 1)
      }}
        className='absolute top-[50%] left-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-light_grayish-blue md:hidden'
      >
        <img
          alt='Previous Icon'
          src={Previous}
          className='mx-auto'
        />
      </div>
      <div
        
        onClick={ () => {
          image < shoe.length - 1 && setImage(image + 1)
        }}
        className='absolute top-[50%] right-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full  bg-neutral-light_grayish-blue md:hidden'
      >
        <img alt='Next Icon' src={Next}className='mx-auto' />
      </div>
    </div>
  )
}

export default ProductImage
