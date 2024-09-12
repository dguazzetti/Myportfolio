"use client"
import React from 'react'
import Image from 'next/image';
import MotionTransition from './transition-components';

const Avatar = () => {
  return (
    <MotionTransition position='bottom' className='bottom-0 right-0 hidden md:inline-block md:fixed'>
        <Image src="/avatar-2.png" width={350} height={350}
        className="w-full h-full"  alt="Avatar"/>
    </MotionTransition>
  );
}

export default Avatar;