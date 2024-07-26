import Image from "next/image";

const Hero = () => {
    return (
        <div className=" pb-12 px-10 md:px-40">
            <div className=" text-primaryBg dark dark:text-white pt-12 capitalize w-full">
                <h1 className="text-7xl font-bold ">Hotel <br/>el Kantaoui <span className="text-primary">Center</span></h1>
                <p className="text-gray-400 py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>

            </div>
            <Image src="/hero1.png" alt="hero" className="mx-auto  rounded-3xl" width={1000} height={20} />
        </div>
    )
}
export default Hero;
