
import Image from "next/image";
import MotionTransition from "./transition-components";

const AvatarServices = () => {
    return (
        <MotionTransition position='rigth' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/services.png" width="300" height="300" className="z-30 w-[350px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;
