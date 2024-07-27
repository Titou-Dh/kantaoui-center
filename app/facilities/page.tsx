import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";



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
          className="border-none my-4 "
        >
          <Image
            alt="Woman listing to music"
            className="object-cover w-full"
            height={1920}
            src="/facility1.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(80%-20px) font-bold shadow-small   z-10 text-center">
            <div className="w-full text-center text-primary text-2xl">Gym</div>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-4 "
        >
          <Image

            alt="poolside"
            className="object-cover w-full"
            height={1920}
            src="/facility2.png"
            width={1080}
          />
          <CardFooter className=" before:bg-white/10  border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-full font-bold shadow-small ml-1 z-10 text-center">
            <div className="w-full text-center  text-primary text-2xl">Swimming Pool</div>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-4 "
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
          className="border-none my-4 "
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
          className="border-none my-4 "
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
          className="border-none my-4 "
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
