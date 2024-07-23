import { WifiIcon, CarIcon, ResortIcon, DrinkIcon } from "./icons";

const Features = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row  justify-center items-center py-12 md:gap-16 dark:bg-primaryBg" >
            <div className="flex items-center justify-around gap-4">
                <div className="rounded-full bg-[#ff770010] p-5">
                    <DrinkIcon height={40} width={40} color="#FF7500" />
                </div>
                <p>Welcome <br /> Drinks</p>
            </div>
            <div className="flex items-center justify-around gap-4">
                <div className="rounded-full bg-[#ff770010] p-5">
                    <WifiIcon height={40} width={40} color="#FF7500" />
                </div>
                <p>Free <br /> Wifi</p>
            </div>
            <div className="flex items-center justify-around gap-4">
                <div className="rounded-full bg-[#ff770010] p-5">
                    <CarIcon height={40} width={40} color="#FF7500" />
                </div>
                <p>Free <br /> Parking</p>
            </div>
            <div className="flex items-center justify-around gap-4">
                <div className="rounded-full bg-[#ff770010] p-5">
                    <ResortIcon height={40} width={40} color="#FF7500" />
                </div>
                <p>Resort <br /> View</p>
            </div>
        </div>
    )
}

export default Features
