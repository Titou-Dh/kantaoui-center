import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { PhoneIcon } from "@/components/icons";



const page = () => {
  return (
    <div className="min-h-screen dark:bg-primaryBg pb-12 px-10 md:px-40">
      <h1 className="text-5xl text-center pt-8 pb-4 text-primary ">
        Facilities
      </h1>
      <p className="md:w-3/4 text-center mx-auto text-gray-500">
        We want your stay at our lush hotel to be truly unforgettable. That is
        why we give special attention to all of your needs so that we can ensure
        an experience quite uniquw. Luxury hotels offers the perfect setting
        with stunning views for leisure and our modern luxury resort facilities
        will help you enjoy the best of all.{" "}
      </p>
      <div className="gap-10">
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
        <p className="text-xl ">Hotel El Kantaoui Center has 346 single, double.  triple and quadruple rooms, divided into 3 blocks,  equipped with 7 lifts each block has 4 floors.  The coveted rooms share space and sunshine,  all air-conditioned equipped with Phones, satellite  TV, Safe (extra charge) Mini Bar, hair dryer, balcony  or terrace.  The approximate surface of the rooms, studios  and apartments including balcony or terrace  vary between 28m and 80m. <br />
          <b>-Air conditioning:</b> For proper operation of the air  conditioning, please ensure that the doors and  windows are well closed. <br />

          <b>-Room Maid Service:</b> Your room will be cleaned and arranged on daily bases. Please use the door  hanger "Do not disturb" if you would like to rest  and have it cleaned later.  Towels are for room use only. There are other  towels if needed for the beach or the pool.  Please contact the Reception ( a deposit of 10  TND per towel).  <br />

          <b>-Laundry service:</b> This service takes up to 48 hours,  the linen is delivered before 10:00.  <br />

          <b>-TV Remote:</b> available at the Reception (deposit  20 TND)  <br />
          <b>-Wakeup Call:</b> Please arrange with the Reception

        </p>
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
        <p className="text-xl">RECEPTION: <div className="flex items-center gap-2"><PhoneIcon color="#fff" height={16} width={16} /> 9</div>
          -Check in: <br />
          14h OO  -Check out: As per the international standards,  uests are requested to release the room on the day  of their departure at 12:00am. <br /> However, guests can sti  leave their luggage in the room designated by the  reception if needed. <br />The Reception offers you  the following services: <br /> <b> Doctor & Pharmacy:</b> inquire at Reception <br />  <b>In-room Safes:</b> 2 TND per day and a deposit of 25 TN  will be paid in advance. <br />  <span className="text-red-800 font-bold">The hotel will NOT be liable for valuables deposited  outside our safes.</span>  <br /> -Exchange Service   <br />-Credit Cards types Accepted: Visa, Master Card <br /> -Mail Service: During your absence, we will keep your  mail and will take note of any messages delivered to y u <br /> -Repairs: We hope that your room will give you compi te  satisfaction. If during your stay you notice any luck,  please report it to the reception and we will take  care of it as soon as possible.

        </p>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-8 "
        >
          <Image
            alt="spa "
            className="object-cover w-full"
            height={1920}
            src="/facility3.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Spa</div>
          </CardFooter>
        </Card>
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
        </Card>
      </div>
    </div>
  );
};

export default page;

