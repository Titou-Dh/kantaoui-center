import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl"

export default function Component() {
  const  t  = useTranslations('Contact');
  return (
    <div className="container flex items-center flex-col md:flex-row  justify-around  mx-auto px-5 lg:px-32 py-12 md:py-20 lg:py-24">
      <div className=" mx-auto space-y-8 w-full  md:w-1/2 ">
        <div className="">
          <h1 className="text-3xl text-primary font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {t("paragraph")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('address')}</h2>
            <div className="space-y-2">
              <p>Hotel el Kantaoui Center</p>
              <p>
                B.P 355 - BD14 Janvier 2011-4089 Port El Kantaoui - Sousse -
                Tunisie
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("phone")}</h2>
            <div className="space-y-2">
              <p>{t("phone")}: +216 22 777 320</p>
              <p>WhatsApp/{t("phone")}: +216 97 275 789</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("email")}</h2>
            <div className="space-y-2">
              <p>
                <Link href="#" className="underline" prefetch={false}>
                  hotel.elkantaoui.center@gmail.com
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Image src="/contact.png" alt="Contact" width={500} height={600} />
    </div>
  );
}

