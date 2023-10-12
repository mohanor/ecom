
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

type ImageProps = {
  src: string,
  name: string,
}

export default async function Range({ src, name }: ImageProps) {

  const buffer:any = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className='text-center'>
      <div className='rounded-lg overflow-hidden relative w-full aspect-[2/3]'>
        <Image
          fill
          alt="NextUI Fruit Image with Zoom"
          src={src}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={base64}
          className='w-full h-full shadow-black-500/5 !duration-300 object-cover object-center'
        />
      </div>
      <h2 className='text-black-500 text-lg capitalize font-medium p-4'>
        {name}
      </h2>
    </div>
  );
}