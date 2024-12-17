"use client";

import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent } from "@nextui-org/modal";
import { PhoneIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Page = () => {
  const t = useTranslations("Facilities");
  const keys = ["juliette", "niagra", "kalven", "doxa", "hookah"] as const;
  const goodToKnowKeys = [
    "elevator",
    "pets",
    "quiet",
    "dress_code",
    "baby-cot",
    "currency",
  ] as const;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen dark:bg-primaryBg pb-12 px-10 md:px-40 leading-relaxed">
      <h1 className="text-5xl text-center pt-8 pb-4 text-primary ">
        {t("title")}
      </h1>

      <div className="gap-10">
        <Card isFooterBlurred radius="lg" className="border-none my-8 ">
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
        <div className="flex  justify-center md:justify-start gap-3 my-5 flex-wrap">
          <Image
            src="/gallery/image47.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-cover rounded-xl"
            onClick={() => openModal("/gallery/image47.jpg")}
          />
        </div>
        <div className="text-xl">
          <p>{t("hotel_info.checkin_checkout")}</p>
          <p>{t("hotel_info.services_offered")}</p>
          <ul>
            <li>{t("hotel_info.doctor_pharmacy")}</li>
            <li>{t("hotel_info.inroom_safes")}</li>
            <li className="text-red-800 font-bold">
              {t("hotel_info.safes_disclaimer")}
            </li>
            <li>{t("hotel_info.exchange_service")}</li>
            <li>{t("hotel_info.credit_cards")}</li>
            <li>{t("hotel_info.mail_service")}</li>
            <li>{t("hotel_info.repairs")}</li>
          </ul>
        </div>
        <Card isFooterBlurred radius="lg" className="border-none my-8 ">
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
          <p>{t("hotel_info.general_info")}</p>
          <ul>
            <li>{t("hotel_info.air_conditioning")}</li>
            <li>{t("hotel_info.room_maid_service")}</li>
            <li>{t("hotel_info.laundry_service")}</li>
            <li>{t("hotel_info.tv_remote")}</li>
            <li>{t("hotel_info.wakeup_call")}</li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 my-5 flex-wrap">
          <Image
            src="/gallery/image4.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image4.jpg")}
          />
          <Image
            src="/gallery/image5.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image5.jpg")}
          />
          <Image
            src="/gallery/image9.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image9.jpg")}
          />
          <Image
            src="/gallery/image11.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image11.jpg")}
          />
          <Image
            src="/gallery/image12.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image12.jpg")}
          />
          <Image
            src="/gallery/image17.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image17.jpg")}
          />
          <Image
            src="/gallery/image19.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-contain rounded-xl"
            onClick={() => openModal("/gallery/image19.jpg")}
          />
        </div>
        <div>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            {t("restaurant_info.restaurant")}
          </h1>
          <Accordion variant="splitted" className="my-8">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <span className="flex items-center dark:text-white text-zinc-800 gap-2">
                  La Fiesta <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  6028
                </span>
              }
            >
              <div>
                <p>{t("restaurant_info.description")}</p>
                <p>{t("restaurant_info.timing.breakfast")}</p>
                <p>{t("restaurant_info.timing.lunch")}</p>
                <p>{t("restaurant_info.timing.dinner")}</p>
                <p>{t("restaurant_info.access_info")}</p>
                <ul>
                  <li>{t("restaurant_info.rules.non_smoking")}</li>
                  <li>{t("restaurant_info.rules.no_takeaway")}</li>
                </ul>
                <p>
                  <strong>{t("restaurant_info.note")}</strong>
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={
                <span className="flex items-center gap-2">
                  The Space (resto & lounge){" "}
                  <PhoneIcon color="#fff" height={16} width={16} /> 6016
                </span>
              }
            >
              {t("restaurant_info.menu_info")}
              <div className="flex  justify-center md:justify-start gap-3 my-5 flex-wrap">
                <Image
                  src="/gallery/image21.jpg"
                  width={200}
                  height={200}
                  alt="rooms"
                  className="object-cover rounded-xl"
                  onClick={() => openModal("/gallery/image21.jpg")}
                />
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={
                <span className="flex items-center gap-2">
                  Ken Zmen <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  6016
                </span>
              }
            >
              {t("restaurant_info.ken_zmen_info")}
            </AccordionItem>
          </Accordion>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            {t("bars_and_cafes.heading")}
          </h1>
          <Accordion variant="splitted" className="my-8">
            <AccordionItem
              key="1"
              aria-label={`Accordion`}
              title={
                <span className="flex items-center gap-2">
                  EL Chedlia <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  6034
                </span>
              }
            >
              {t(`bars_and_cafes.el_chedlia.description`)}
            </AccordionItem>

            <AccordionItem
              key="11"
              aria-label={`Accordion`}
              title={
                <span className="flex items-center gap-2">
                  {t(`bars_and_cafes.juliette.title`)}{" "}
                  <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  {t(`bars_and_cafes.juliette.phone`)}
                </span>
              }
            >
              {t(`bars_and_cafes.juliette.description`)}
              <div className="flex  justify-center md:justify-start gap-3 my-5 flex-wrap">
                <Image
                  src="/gallery/image10.jpg"
                  width={200}
                  height={200}
                  alt="rooms"
                  className="object-cover rounded-xl"
                  onClick={() => openModal("/gallery/image10.jpg")}
                />
              </div>
            </AccordionItem>
            <AccordionItem
              key="22"
              aria-label={`Accordion`}
              title={
                <span className="flex items-center gap-2">
                  {t(`bars_and_cafes.niagra.title`)}{" "}
                  <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  {t(`bars_and_cafes.niagra.phone`)}
                </span>
              }
            >
              {t(`bars_and_cafes.niagra.description`)}
            </AccordionItem>
            <AccordionItem
              key="33"
              aria-label={`Accordion`}
              title={
                <span className="flex items-center gap-2">
                  {t(`bars_and_cafes.kalven.title`)}{" "}
                  <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  {t(`bars_and_cafes.kalven.phone`)}
                </span>
              }
            >
              {t(`bars_and_cafes.kalven.description`)}
            </AccordionItem>
            <AccordionItem
              key="44"
              aria-label={`Accordion`}
              title={
                <span className="flex items-center gap-2">
                  {t(`bars_and_cafes.doxa.title`)}{" "}
                  <PhoneIcon color="#fff" height={16} width={16} />{" "}
                  {t(`bars_and_cafes.doxa.phone`)}
                </span>
              }
            >
              {t(`bars_and_cafes.doxa.description`)}
              <div className="flex items-center justify-center md:justify-start gap-3 my-5 flex-wrap">
                <Image
                  src="/gallery/image1.jpg"
                  width={200}
                  height={200}
                  alt="rooms"
                  className="object-contain rounded-xl"
                  onClick={() => openModal("/gallery/image1.jpg")}
                />
                <Image
                  src="/gallery/image37.jpg"
                  width={200}
                  height={200}
                  alt="rooms"
                  className="object-contain rounded-xl"
                  onClick={() => openModal("/gallery/image37.jpg")}
                />
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
          Beach
        </h1>

        <Card isFooterBlurred radius="lg" className="border-none my-8">
          <Image
            alt="spa "
            className="object-cover w-full"
            height={1920}
            src="/beach.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">
              {t("beach")}
            </div>
          </CardFooter>
        </Card>
        <div className="flex  justify-center md:justify-start gap-3 my-5 flex-wrap">
          <Image
            src="/gallery/image6.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-cover rounded-xl"
            onClick={() => openModal("/gallery/image6.jpg")}
          />
          <Image
            src="/gallery/image31.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-cover rounded-xl"
            onClick={() => openModal("/gallery/image31.jpg")}
          />

          <Image
            src="/gallery/image32.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-cover rounded-xl"
            onClick={() => openModal("/gallery/image32.jpg")}
          />
          <Image
            src="/gallery/image7.jpg"
            width={200}
            height={200}
            alt="rooms"
            className="object-cover rounded-xl"
            onClick={() => openModal("/gallery/image7.jpg")}
          />
        </div>
        <p className="text-xl">{t("beach_description")}</p>
        <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
          Entertainment
        </h1>
        <Card isFooterBlurred radius="lg" className="border-none my-8">
          <Image
            alt="spa "
            className="object-cover w-full"
            height={1920}
            src="/entertainment.jpg"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">
              Entertainment
            </div>
          </CardFooter>
        </Card>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("entertainmentProgram.title")}
          </h2>
          <p className="mb-4">{t("entertainmentProgram.description")}</p>
          <p className="mb-4">
            {t("entertainmentProgram.daytimeEntertainment")}
          </p>
          <h3 className="text-xl font-semibold mb-2">
            {t("entertainmentProgram.nightlife.title")}
          </h3>
          <p className="mb-4">
            {t("entertainmentProgram.nightlife.description")}
          </p>
          <p className="mb-4">
            {t("entertainmentProgram.nightlife.miniDisco")}
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("sport.title")}
          </h2>
          <p className="mb-4">{t("sport.description")}</p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("pools.title")}
          </h2>
          <p className="mb-4">{t("pools.description")}</p>
          <ul className="list-disc list-inside mb-8">
            <li>{t("pools.pools1")}</li>
            <li>{t("pools.pools2")}</li>
          </ul>
          <p className="mb-8">{t("pools.guardedHours")}</p>
          <div className="flex items-center justify-center md:justify-start gap-3 my-5 flex-wrap">
            <Image
              src="/gallery/image2.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image2.jpg")}
            />
            <Image
              src="/gallery/image26.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image26.jpg")}
            />
            <Image
              src="/gallery/image3.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image3.jpg")}
            />
            <Image
              src="/gallery/image13.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image13.jpg")}
            />
            <Image
              src="/gallery/image15.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image15.jpg")}
            />
            <Image
              src="/gallery/image18.jpg"
              width={200}
              height={200}
              alt="rooms"
              className="object-contain rounded-xl"
              onClick={() => openModal("/gallery/image18.jpg")}
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("otherServices.title")}
          </h2>
          <ul className="list-disc list-inside mb-8">
            <li>
              {t("otherServices.conference")}
              {": "}
              <span className="list-none text-white dark:text-gray-300">
                {t("otherServices.conferenceDescription")}
              </span>
            </li>
            <li>{t("otherServices.gym")}</li>
            <li>{t("otherServices.boutique")}</li>
            <li>{t("otherServices.drugstore")}</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("goodToKnow.title")}
          </h2>
          <ul className="list-disc list-inside mb-8">
            {goodToKnowKeys.map((key) => (
              <li key={key}>
                <strong>{t(`goodToKnow.items.${key}.label`)}:</strong>{" "}
                {t(`goodToKnow.items.${key}.description`)}
              </li>
            ))}
          </ul>
          <p className="mb-8">{t("goodToKnow.suggestions")}</p>
          <p className="mb-8">{t("goodToKnow.teamWish")}</p>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          backdrop="blur"
          size="3xl"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <ModalContent>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={800}
                height={800}
                className="object-contain rounded-lg"
              />
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Page;
