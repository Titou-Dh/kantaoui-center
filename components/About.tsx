import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Component() {
  const t = useTranslations('About');
  return (
    <div className="" id="about">
      <div className="text-center pb-12 pt-20 ">
        <h1 className="text-4xl capitalize font-bold " data-aos="fade-right">
          {t("title")} Kantaoui<span className="text-primary"> Center</span>
        </h1>
      </div>
      <section className="py-12 md:px-40 px-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 content-center">
            <div className="md:pt-20" data-aos="fade-up">
              <p className="text-muted-foreground text-xl  mb-6" >
                {t("paragraph")}

              </p>
              <Link href="/facilities">
                <Button className="bg-primary text-white">
                  {t('more')}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2  gap-4" data-aos="fade-up">
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
