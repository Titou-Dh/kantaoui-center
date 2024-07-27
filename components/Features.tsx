import { WifiIcon, CarIcon, ResortIcon, DrinkIcon } from "./icons";

const Features = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row text-center gap-10  justify-center items-center px-12 py-12 md:gap-16 dark:bg-primaryBg" >
            <div className="flex items-center md:justify-around gap-4 w-full md:w-min">
                <div className="rounded-full bg-[#7c6a461e] p-5">
                    <WifiIcon height={40} width={40} color="#7C6A46" />
                </div>
                <p>Free <br /> Wifi</p>
            </div>
            <div className="flex items-center md:justify-around gap-4 w-full md:w-min">
                <div className="rounded-full bg-[#7c6a461e] p-5">
                    <CarIcon height={40} width={40} color="#7C6A46" />
                </div>
                <p>Free <br /> Parking</p>
            </div>
            <div className="flex items-center md:justify-around gap-4 w-full md:w-min">
                <div className="rounded-full bg-[#7c6a461e] p-5">
                    <ResortIcon height={40} width={40} color="#7C6A46" />
                </div>
                <p>Resort <br /> View</p>
            </div>
        </div>
    )
}

export default Features
