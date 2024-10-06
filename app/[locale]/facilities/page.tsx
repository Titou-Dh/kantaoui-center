"use client"

import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { PhoneIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@nextui-org/accordion";



const page = () => {
  return (
    <div className="min-h-screen dark:bg-primaryBg pb-12 px-10 md:px-40 leading-relaxed">
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
        <p className="text-xl">RECEPTION: <span className="flex items-center gap-2"><PhoneIcon color="#fff" height={16} width={16} /> 9</span>
          -Check in: <br />
          14h OO  -Check out: As per the international standards,  uests are requested to release the room on the day  of their departure at 12:00am. <br /> However, guests can sti  leave their luggage in the room designated by the  reception if needed. <br />The Reception offers you  the following services: <br /> <b> Doctor & Pharmacy:</b> inquire at Reception <br />  <b>In-room Safes:</b> 2 TND per day and a deposit of 25 TN  will be paid in advance. <br />  <span className="text-red-800 font-bold">The hotel will NOT be liable for valuables deposited  outside our safes.</span>  <br /> -Exchange Service   <br />-Credit Cards types Accepted: Visa, Master Card <br /> -Mail Service: During your absence, we will keep your  mail and will take note of any messages delivered to y u <br /> -Repairs: We hope that your room will give you compi te  satisfaction. If during your stay you notice any luck,  please report it to the reception and we will take  care of it as soon as possible.

        </p>
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
          <b>-Wakeup Call:</b> Please arrange with the Reception.

        </p>
        <div>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            Restaurants
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
              The hotel's main Restaurant offering a rich Buffet and a Show Cooking service.
              Breakfast: from 6:30AM to 10:00AM
              Lunch: from 12:30PM to 14:OOPM
              Dinner: from 18:30PM to 20:OOPM
              Presenting Resident Access Card is required at the entrance of the Restaurant (bracelet required )
              <br />
              - Inside The Restaurant area is entirely non-smoking.
              <br />
              - It is strictly forbidden to take food, drinks and equipment out of the restaurant.
              <br />
              <strong>NB:</strong> It is recommended that you order your drinks before heading to the buffet in order to speed up the service (Extra Drinks).
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
              The restaurant offers a rich Menu that includes  different dishes, salads and pastries all freshand tasty.  Open from 17:00PM until OOhOO
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
              Ken Zmen is a Tunisian restaurant that offers  a variety of traditional dishes in a warm and  friendly atmosphere.
            </AccordionItem>
          </Accordion>
          <h1 className="text-3xl text-center my-12 pt-8 pb-4 text-primary ">
            Bars & Cafes
          </h1>
          <Accordion variant="splitted" className="my-8">
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={
                <span className="flex items-center gap-2">
                  Salon de Thé ( Cafe & Lounge) Juliette<PhoneIcon color="#fff" height={16} width={16} />  6016
                </span>
              }
            >
              Juliette Tea lounge offers a rich menu (coffee,  tea, juices of different kinds) and a pastry of high  range in a good family atmosphere.  Open from 07hOO to OOhOO
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title={
                <span className="flex items-center gap-2">
                  Niagara <PhoneIcon color="#fff" height={16} width={16} />  6033
                </span>
              }
            >
              Located on the 1st floor, opening on the outdo r  pool, this snack is known for its fast and light.  menu (Open during the Summer Season)  Ideal for a quick snack or drink by the pool  open from IO:OOAM until 00:00
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title={
                <span className="flex items-center gap-2">
                  Kalven club / dancing bar <PhoneIcon color="#fff" height={16} width={16} />  6017
                </span>
              }
            >
              A soft and captivating atmosphere, an alternative  music, a pure moment of relaxation and  well-being. A trendy club.  Open from 8 pm to 2 am
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Accordion 6"
              title={
                <span className="flex items-center gap-2">
                  Doxa <PhoneIcon color="#fff" height={16} width={16} />  6036
                </span>
              }
            >
              The right place to enjoy a beautiful setting  and good atmosphere, famous for its cocktails,  T appas and Shooters with live Bands.  Ideal place for lovers of tranquility and privacy  Open from 5 pm to 2 am
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="Accordion 7"
              title={
                <span className="flex items-center gap-2">
                  Hookah <PhoneIcon color="#fff" height={16} width={16} />  6034
                </span>
              }
            >
              A marriage of scents and typical colors, a main  place of delicacies (Shisha and Turkish coffee to  be savored in a very oriental atmosphere).  open from 18:00 to 02:00
            </AccordionItem>
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
            <div className="w-full text-center  text-primary text-2xl">Beach</div>
          </CardFooter>
        </Card>
        <p className="text-xl">
          Beautiful private, fine sand beach located  at 250m from the 'hötel, equipped with parasols,  deckchairs and mattresses free for hotel guests  (water sports nearby with extra fee).
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


        <div className="text-xl"><h2 className="text-2xl font-bold text-primary mb-4">Entertainment Program:</h2>
          <p className="mb-4 ">You can view our daytime and nighttime entertainment programs on the Reception bulletin board.</p>
          <ul className="list-disc list-inside mb-8">
            <li><strong>Daytime entertainment:</strong> aperitif games, darts, dance classes, aqua-gym, gymnastics, beach, volleyball.</li>
            <li><strong>Nightlife:</strong> these activities take place on stage at the lower level in winter and at the edge of the outdoor pool in summer and also touch all categories of ages:
              <ul className="list-disc list-inside ml-6">
                <li>Mini disco for your children from 9pm to 9:30pm followed by various shows.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Sport:</h2>
          <p className="mb-8">Discover nearby the opportunity to practice Tennis, Horse Riding, Windsurfing, Sailing, Water Skiing, and Golf or just enjoy a simple stroll. Please contact Reception for better information or bookings.</p>

          <h2 className="text-2xl font-bold text-primary mb-4">Pools:</h2>
          <p className="mb-4">The hotel has two swimming pools:</p>
          <ul className="list-disc list-inside mb-8">
            <li>An outdoor swimming pool located on the 1st floor</li>
            <li>A heated indoor swimming pool located on the lower level</li>
          </ul>
          <p className="mb-8">Pools are guarded from 09:00 to 19:00. Children must be accompanied at all times by their parents while swimming.</p>

          <h2 className="text-2xl font-bold text-primary mb-4">Other Services (Extras):</h2>
          <ul className="list-disc list-inside mb-8">
            <li>conférence</li>
            <li>Gym: on the lower level</li>
            <li>Drugstore</li>
          </ul>
        </div>
        <div className="text-xl leading-relaxed">
          <h2 className="text-2xl font-bold text-primary mb-4">Good to Know:</h2>
          <ul className="list-disc list-inside mb-8">
            <li><strong>Elevators:</strong> Elevators are strictly not allowed for unaccompanied children.</li>
            <li><strong>Pets:</strong> Pets are not allowed in the hotel.</li>
            <li><strong>Keeping it quiet:</strong> It is requested throughout the hotel to ensure rest for all guests. Avoid slamming doors or making excessive noise, especially in the corridors.</li>
            <li><strong>Dress code in common premises:</strong> It is strictly not allowed to access common areas such as Restaurants, Bars, and Reception in wet bathing suits, with a naked torso, or barefoot.</li>
            <li><strong>Baby Cot:</strong> Please contact the reception to have a baby cot placed in your room.</li>
            <li><strong>Meetings, seminars, conferences, and exhibitions:</strong> The hotel offers an ideal environment for your events with a multi-purpose room (with a capacity of up to 300 individuals) and breakout rooms.</li>
            <li><strong>Currency and Currency Exchange, ATM Machine, Car Rental:</strong> All available 24-hours at the Reception.</li>
          </ul>

          <p className="mb-8">For all your suggestions and comments, do not hesitate to contact us. Our goal is to make your stay a real pleasure and an unforgettable experience. Please inform the Reception if you encounter any inconvenience during your stay. We will do our best to remedy it as quickly and efficiently as possible.</p>

          <p className="mb-8">The entire team of the hotel wishes you a pleasant stay.</p>
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

export default page;

