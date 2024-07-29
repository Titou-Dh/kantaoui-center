import { Button } from "@nextui-org/button";

export default function Component() {
  return (
    <div className="">
      {/* <section className="w-full  h-[500px] relative">
                <img
                    src="/placeholder.svg"
                    width={1920}
                    height={500}
                    alt="Hotel Hero"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold">The Grand Majestic Hotel</h1>
                        <p className="text-lg md:text-xl">Experience the epitome of luxury and comfort in the heart of the city.</p>
                    </div>
                </div>
            </section> */}
      <div className="text-center py-12 ">
        <h1 className="text-4xl capitalize font-bold">
          About Kantaoui<span className="text-primary"> Center</span>
        </h1>
        {/* <p className="text-gray-400 mt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat.
        </p> */}
      </div>
      <section className="py-12 md:px-40 px-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About kantaoui Center
              </h2> */}
              <p className="text-muted-foreground mb-6">
                The management and staff of the hotel EL KANTAOUI CENTER , wish
                you a warm welcome and thank you for choosing our hotel. This
                guide will help you familiarize with our hotel's amenities and
                the services that we offer. We also invite you to contact the
                Reception for any further information. We wish you a pleasant
                stay.
              </p>
              {/* <p className="text-muted-foreground mb-6">
                                Our hotel boasts a rich history, with the original building dating back to the early 1900s. Over the
                                years, we have undergone extensive renovations to maintain our timeless elegance while incorporating
                                modern amenities and technologies to ensure our guests have the most comfortable and enjoyable stay.
                            </p> */}
              <Button className="bg-primary text-white">
                Explore Our Amenities
              </Button>
            </div>
            <div className="grid grid-cols-2  gap-4">
              <img
                src="/1.jpg"
                width={300}
                height={200}
                alt="Hotel Lobby"
                className="rounded-lg object-cover"
              />
              <img
                src="/2.jpg"
                width={300}
                height={200}
                alt="Hotel Room"
                className="rounded-lg object-cover"
              />
              <img
                src="/3.jpg"
                width={300}
                height={200}
                alt="Hotel Spa"
                className="rounded-lg object-cover"
              />
              <img
                src="/4.jpg"
                width={300}
                height={200}
                alt="Hotel Pool"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
