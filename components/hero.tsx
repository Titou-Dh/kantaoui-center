'use client';

import Image from "next/image";

import {useTranslations} from 'next-intl';


const Hero = () => {
    const t = useTranslations('Hero');


    return (
        <div className=" pb-12 px-10 md:px-40" >
            <div className=" text-primaryBg dark dark:text-white pt-12 capitalize w-full ">
                <div className="text-7xl font-bold " data-aos="fade-right">
                    <h1 className=" flex  gap-6" >{t('title')}
                        <span className="flex flex-wrap gap-2 ">
                            <Image src="/star-svgrepo-com.svg" alt="logo" width={40} height={40} />
                            <Image src="/star-svgrepo-com.svg" alt="logo" width={40} height={40} />
                            <Image src="/star-svgrepo-com.svg" alt="logo" width={40} height={40} />
                            

                        </span>
                        <br /></h1>
                    <h1 className="w-min">
                        el Kantaoui <span className="text-primary">Center</span>
                    </h1>
                </div>
                <p className="text-gray-400 py-8 md:w-1/2 w-full " data-aos="fade-right" data-aos-duration="1350" >
                    {t('paragraph')}
                </p>

            </div>
            <Image data-aos="fade-up" src="/hero1.png" alt="hero" className="mx-auto  rounded-3xl" width={1000} height={20} />
        </div>
    )
}
export default Hero;
