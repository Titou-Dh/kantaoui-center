import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="" id="about">
      <div className="text-center pb-12 pt-20 ">
        <h1 className="text-4xl capitalize font-bold">
          About Kantaoui<span className="text-primary"> Center</span>
        </h1>
      </div>
      <section className="py-12 md:px-40 px-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 content-center">
            <div className="md:pt-20">
              <p className="text-muted-foreground text-xl  mb-6">
                the hotel offers four stars accommodation, 346 rooms  and suites renovated with all modern commodities i.e  satellite TV, Deposit box, telephone, Mini bar, air  conditioning.

              </p>
              {/* <p className="text-muted-foreground mb-6">
                                Our hotel boasts a rich history, with the original building dating back to the early 1900s. Over the
                                years, we have undergone extensive renovations to maintain our timeless elegance while incorporating
                                modern amenities and technologies to ensure our guests have the most comfortable and enjoyable stay.
                            </p> */}
              <Link href="/facilities">
                <Button className="bg-primary text-white">
                  Learn More
                </Button>
              </Link>
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
