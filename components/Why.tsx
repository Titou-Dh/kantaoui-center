"use client";

import { WifiIcon, CarIcon, ResortIcon } from "./icons";
import { useTranslations } from "next-intl";

const Why = () => {
    const t = useTranslations("Why");
    return (
        <div className="dark:bg-primaryBg">
            <div className="text-center py-12 ">
                <h1 className="text-4xl capitalize font-bold" data-aos="fade-right">
                    {t("titre")}
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around md:pl-40 pl-2 py-8  ">
                <div className="md:w-1/2  w-full text-center md:text-start gap-8 flex flex-col justify-center md:justify-start">
                    <div data-aos="fade-down">
                        <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0">
                            {" "}
                            <WifiIcon height={24} width={24} color="#fff" />
                        </div>
                        <h2 className="text-xl text-black my-2 dark:text-white">
                            {t("freeWifi.title")}
                        </h2>
                        <p className="text-gray-500">
                            {t("freeWifi.message")}
                            <br />
                        </p>
                    </div>
                    <div data-aos="fade-down">
                        <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0">
                            {" "}
                            <CarIcon height={24} width={24} color="#fff" />
                        </div>
                        <h2 className="text-xl dark:text-white text-black my-2">
                            {t("freeParking.title")}
                        </h2>
                        <p className="text-gray-500">
                            {t("freeParking.message")} <br />
                        </p>
                    </div>
                    <div data-aos="fade-down">
                        <div className="rounded-full bg-primary w-min p-4 mx-auto md:mx-0">
                            {" "}
                            <ResortIcon height={24} width={24} color="#fff" />
                        </div>
                        <h2 className="text-xl dark:text-white text-black my-2">
                            {t("ressort.title")}{" "}
                        </h2>
                        <p className="text-gray-500">
                            {t("ressort.message")}
                            <br />
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full" data-aos="zoom-in">
                    <img src="/why.png" alt="why1" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Why;
