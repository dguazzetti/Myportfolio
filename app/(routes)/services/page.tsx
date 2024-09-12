
import AvatarServices from '@/components/avatar-services';
import CircleImage from '@/components/circle-image';
import TransitionPage from '@/components/transition-page';
import SliderServices from '@/components/slider-services';
import React from 'react'

const PageServices = () => {
  return (
<>
<TransitionPage/>
<CircleImage/>
<AvatarServices/>
<div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0 ms-10">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas
                     y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la 
                     identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className="z-10 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>


</>
);
}

export default PageServices;