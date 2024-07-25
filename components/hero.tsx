import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="bg-primaryBg text-white py-12 md:px-40 px-16 capitalize w-full">
                <h1 className="text-5xl ">Open the door for a <br />
                    spacious <span className="text-primary">living-</span></h1>
                <p className="text-gray-400 py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>

            </div>
            <Image src="/hero.png" alt="hero" width={1920} height={1080} />
        </>
    )
}
export default Hero;
