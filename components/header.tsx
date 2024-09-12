import Link from 'next/link'

import { socialNetworks } from '@/data';

import MotionTransition from './transition-components'
import { link } from 'fs';


const Header = () => {
  return (
    <MotionTransition position="bottom" className='absolute z-40 inline-block w-full top-5 md:top-10 px-20'>
        <header>
            <div className='container justify-between max-w-6xl mx-auto md:flex'>
        <Link href="/">
            <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                DG
                <span className='text-secondary'>
                    Dev
                </span>
            </h1>
        </Link>
        <div className='flex items-center justify-center gap-7'>
            {socialNetworks.map(({ logo, src, id}) =>
            <Link 
                key={id}
                href={src}
                target='_blank'
                className='transition-all duration-300 hover:text-secondary'
                > 
                    {logo}
            </Link>
            )}
             
        </div>
            </div>
        </header>
    </MotionTransition>
  );

}

export default Header