import Gallery from "@/components/gallery";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-10">
      <h1 className="text-5xl text-center pt-8 pb-4 text-primary ">
        Our Gallery
      </h1>
      <Gallery max_items={200} />
    </div>
  );
};

export default Page;
