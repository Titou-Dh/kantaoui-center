import Image from "next/image";

const Hero = () => {
    return (
        <div className=" pb-12 px-10 md:px-40" >
            <div className=" text-primaryBg dark dark:text-white pt-12 capitalize w-full ">
                <div className="text-7xl font-bold " data-aos="fade-right">
                    <h1 className=" flex  gap-6" >Hotel
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
                    The management and staff of the hotel EL KANTAOUI CENTER , wish
                    you a warm welcome and thank you for choosing our hotel. This
                    guide will help you familiarize with our hotel's amenities and
                    the services that we offer. We also invite you to contact the
                    Reception for any further information. We wish you a pleasant
                    stay.
                </p>

            </div>
            <Image data-aos="fade-up" src="/hero1.png" alt="hero" className="mx-auto  rounded-3xl" width={1000} height={20} />
        </div>
    )
}
export default Hero;
