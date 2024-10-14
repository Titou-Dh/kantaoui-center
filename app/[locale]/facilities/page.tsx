"use client"

import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { PhoneIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Facilities");
  const keys = ["juliette", "niagra", "kalven", "doxa", "hookah"] as const
  const goodToKnowKeys = ["elevator", "pets", "quiet", "dress_code", "baby-cot", "meeting", "currency"] as const;
  return (
    <div className="min-h-screen dark:bg-primaryBg pb-12 px-10 md:px-40 leading-relaxed">
      <h1 className="text-5xl text-center pt-8 pb-4 text-primary ">
        {t("title")}
      </h1>
      <p className="md:w-3/4 text-center mx-auto text-gray-500">
        {t("paragraph")}
        {" "}
      </p>
      <div className="gap-10">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image

            alt="poolside"
            className="object-cover w-full"
            height={1920}
            src="/reception.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center   text-2xl">Reception</div>
          </CardFooter>
        </Card>
        <div className="text-xl">
          <p>{t('hotel_info.checkin_checkout')}</p>
          <p>{t('hotel_info.services_offered')}</p>
          <ul>
            <li>{t('hotel_info.doctor_pharmacy')}</li>
            <li>{t('hotel_info.inroom_safes')}</li>
            <li className="text-red-800 font-bold">{t('hotel_info.safes_disclaimer')}</li>
            <li>{t('hotel_info.exchange_service')}</li>
            <li>{t('hotel_info.credit_cards')}</li>
            <li>{t('hotel_info.mail_service')}</li>
            <li>{t('hotel_info.repairs')}</li>
          </ul>
        </div>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image
            alt="Woman listing to music"
            className="object-cover w-full"
            height={1920}
            src="/2.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center  text-2xl">Rooms</div>
          </CardFooter>
        </Card>
        <div className="text-xl">
          <p>{t('hotel_info.general_info')}</p>
          <ul>
            <li>{t('hotel_info.air_conditioning')}</li>
            <li>{t('hotel_info.room_maid_service')}</li>
            <li>{t('hotel_info.laundry_service')}</li>
            <li>{t('hotel_info.tv_remote')}</li>
            <li>{t('hotel_info.wakeup_call')}</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            {t('restaurant_info.restaurant')}
          </h1>
          <Accordion variant="splitted" className="my-8">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <span className="flex items-center dark:text-white text-zinc-800 gap-2">
                  La Fiesta <PhoneIcon color="#fff" height={16} width={16} /> 6028
                </span>
              }
            >
              <div >
                <p>{t('restaurant_info.description')}</p>
                <p>{t('restaurant_info.timing.breakfast')}</p>
                <p>{t('restaurant_info.timing.lunch')}</p>
                <p>{t('restaurant_info.timing.dinner')}</p>
                <p>{t('restaurant_info.access_info')}</p>
                <ul>
                  <li>{t('restaurant_info.rules.non_smoking')}</li>
                  <li>{t('restaurant_info.rules.no_takeaway')}</li>
                </ul>
                <p><strong>{t('restaurant_info.note')}</strong></p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={
                <span className="flex items-center gap-2">
                  The Space <PhoneIcon color="#fff" height={16} width={16} />  6016
                </span>
              }
            >
              {t('restaurant_info.menu_info')}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={
                <span className="flex items-center gap-2">
                  Ken Zmen <PhoneIcon color="#fff" height={16} width={16} />  6016
                </span>
              }
            >
              {t('restaurant_info.ken_zmen_info')}
            </AccordionItem>
          </Accordion>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            Bars & Cafes
          </h1>
          <Accordion variant="splitted" className="my-8">
            {
              keys.map((key) => (
                <AccordionItem
                  key={key}
                  aria-label={`Accordion ${key}`}
                  title={
                    <span className="flex items-center gap-2">
                      {t(`bars_and_cafes.accordion_items.${key}.title`)} <PhoneIcon color="#fff" height={16} width={16} />  {t(`bars_and_cafes.accordion_items.${key}.phone`)}
                    </span>
                  }
                >
                  {t(`bars_and_cafes.accordion_items.${key}.description`)}
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>

        <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
          Beach
        </h1>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8"
        >
          <Image
            alt="spa "
            className="object-cover w-full"
            height={1920}
            src="/beach.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">{t("beach")}</div>
          </CardFooter>
        </Card>
        <p className="text-xl">
          {t("beach_description")}
        </p>
        <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
          Entertainment
        </h1>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8"
        >
          <Image
            alt="spa "
            className="object-cover w-full"
            height={1920}
            src="/entertainment.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Entertainment</div>
          </CardFooter>
        </Card>


        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('entertainmentProgram.title')}</h2>
          <p className="mb-4">{t('entertainmentProgram.description')}</p>
          <p className="mb-4">{t('entertainmentProgram.daytimeEntertainment')}</p>
          <h3 className="text-xl font-semibold mb-2">{t('entertainmentProgram.nightlife.title')}</h3>
          <p className="mb-4">{t('entertainmentProgram.nightlife.description')}</p>
          <p className="mb-4">{t('entertainmentProgram.nightlife.miniDisco')}</p>

          <h2 className="text-2xl font-bold text-primary mb-4">{t('sport.title')}</h2>
          <p className="mb-4">{t('sport.description')}</p>

          <h2 className="text-2xl font-bold text-primary mb-4">{t('pools.title')}</h2>
          <p className="mb-4">{t('pools.description')}</p>
          <ul className="list-disc list-inside mb-8">
            <li>{t("pools.pools1")}</li>
            <li>{t("pools.pools2")}</li>
          </ul>
          <p className="mb-8">{t('pools.guardedHours')}</p>

          <h2 className="text-2xl font-bold text-primary mb-4">{t('otherServices.title')}</h2>
          <ul className="list-disc list-inside mb-8">
            <li>{t('otherServices.conference')}</li>
            <li>{t('otherServices.gym')}</li>
            <li>{t('otherServices.drugstore')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">{t('goodToKnow.title')}</h2>
          <ul className="list-disc list-inside mb-8">
            {
              goodToKnowKeys.map((key) => (
                <li key={key}><strong>{t(`goodToKnow.items.${key}.label`)}:</strong> {t(`goodToKnow.items.${key}.description`)}</li>
              ))
            }
          </ul>
          <p className="mb-8">{t('goodToKnow.suggestions')}</p>
          <p className="mb-8">{t('goodToKnow.teamWish')}</p>
        </div>

        {/* 
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image
            alt="Bar"
            className="object-cover w-full"
            height={1920}
            src="/facility4.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Bar</div>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image
            alt="Restaurant"
            className="object-cover w-full"
            height={1920}
            src="/facility5.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Restaurant</div>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image
            alt="Conference Room"
            className="object-cover w-full"
            height={1920}
            src="/facility6.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Laundry</div>
          </CardFooter>
        </Card> */}

      </div>
    </div>
  );
};

export default Page;

