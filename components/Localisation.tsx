import React from "react";
import { useTranslations } from "next-intl";

const Localisation = () => {
  const t = useTranslations("Where");
  return (
    <div className="text-center py-12 md:px-40 px-12">
      <h1 className="text-4xl capitalize font-bold" data-aos="fade-right">
        {t("title")}
      </h1>
      <p className="text-gray-400 mt-5" data-aos="fade-up" >
       {
          t("paragraph")
       }
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.427639943773!2d10.594703175601586!3d35.88754077252135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020f759d21bd6b%3A0xfa895ac38f56d2f6!2sEl%20Kantaoui%20Center!5e0!3m2!1sen!2stn!4v1722026665066!5m2!1sen!2stn"
        width="600"
        height="450"
        className="w-full rounded-2xl shadow-lg my-10"
        loading="lazy"
        title="map"
        data-aos="zoom-in"
      ></iframe>
    </div>
  );
};

export default Localisation;
