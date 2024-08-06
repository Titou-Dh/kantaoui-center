import { WifiIcon, CarIcon, ResortIcon } from "./icons";

const Why = () => {
    return (
        <div className="dark:bg-primaryBg">
            <div className="text-center py-12 ">
                <h1 className="text-4xl capitalize font-bold">
                    Why you should <span className="text-primary">stay here</span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around md:pl-40 pl-2 py-8  ">
                <div className="md:w-1/2  w-full text-center md:text-start gap-8 flex flex-col justify-center md:justify-start">
                    <div>
                        <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0"> <WifiIcon height={24} width={24} color="#fff"  /></div>
                        <h2 className="text-xl text-black my-2 dark:text-white">Free wifi</h2>
                        <p className="text-gray-500">
                            Get the best internet facility in the town. <br />
                        </p>
                    </div>
                    <div>
                        <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0"> <CarIcon height={24} width={24} color="#fff" /></div>
                        <h2 className="text-xl dark:text-white text-black my-2">Free Parking</h2>
                        <p className="text-gray-500">
                            Get the best parking facility in the town. <br />
                        </p>
                    </div>
                    <div>
                    <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0"> <ResortIcon height={24} width={24} color="#fff" /></div>
                        <h2 className="text-xl dark:text-white text-black my-2">Ressort view </h2>
                        <p className="text-gray-500">
                            Get the best view in the town. <br />
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src="/why.png" alt="why1" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Why;
