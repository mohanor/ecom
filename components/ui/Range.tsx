'use client';
import Image from 'next/image';

type ImageProps = {

  src?: string,
  name?: string,

}

export default function Range({ src ="/images/image.jpg", name = 'Dining' }: ImageProps) {
  return (
    <div className='text-center'>
      <div className='w-full xs:w-[300px] h-[400px]  rounded-lg overflow-hidden'>
        <Image
          width={240}
          height={240}
          alt="NextUI Fruit Image with Zoom"
          src={src}
          className='w-full h-full shadow-black-500/5 !duration-300 object-cover object-center'
        />
      </div>
      <h2 className='text-black-500 text-lg capitalize font-medium p-4'>
        {name}
      </h2>
    </div>
  );
}