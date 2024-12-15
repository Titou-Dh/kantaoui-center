"use client";

import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

const images = [
  {
    src: "/gallery/image1.jpg",
  },
  {
    src: "/gallery/image2.jpg",
  },
  {
    src: "/gallery/image3.jpg",
  },
  {
    src: "/gallery/image4.jpg",
  },
  {
    src: "/gallery/image5.jpg",
  },
  {
    src: "/gallery/image6.jpg",
  },
  {
    src: "/gallery/image7.jpg",
  },
    {
      src: "/gallery/image8.jpg",
    },
  {
    src: "/gallery/image9.jpg",
  },
  {
    src: "/gallery/image10.jpg",
  },
  {
    src: "/gallery/image11.jpg",
  },
  {
    src: "/gallery/image12.jpg",
  },
  {
    src: "/gallery/image13.jpg",
  },
  {
    src: "/gallery/image14.jpg",
  },
  {
    src: "/gallery/image15.jpg",
  },
  {
    src: "/gallery/image16.jpg",
  },
  {
    src: "/gallery/image17.jpg",
  },
  {
    src: "/gallery/image18.jpg",
  },
  {
    src: "/gallery/image19.jpg",
  },
  {
    src: "/gallery/image20.jpg",
  },
  {
    src: "/gallery/image21.jpg",
  },
  {
    src: "/gallery/image22.jpg",
  },
  {
    src: "/gallery/image23.jpg",
  },
  {
    src: "/gallery/image24.jpg",
  },
  {
    src: "/gallery/image25.jpg",
  },
  {
    src: "/gallery/image26.jpg",
  },
  {
    src: "/gallery/image27.jpg",
  },
  {
    src: "/gallery/image28.jpg",
  },
  {
    src: "/gallery/image29.jpg",
  },
  {
    src: "/gallery/image30.jpg",
  },
  {
    src: "/gallery/image31.jpg",
  },
  {
    src: "/gallery/image32.jpg",
  },
  {
    src: "/gallery/image33.jpg",
  },
  {
    src: "/gallery/image34.jpg",
  },
  {
    src: "/gallery/image35.jpg",
  },
  {
    src: "/gallery/image36.jpg",
  },
  {
    src: "/gallery/image37.jpg",
  },
  {
    src: "/gallery/image38.jpg",
  },
  {
    src: "/gallery/image39.jpg",
  },
  {
    src: "/gallery/image40.jpg",
  },
  {
    src: "/gallery/image41.jpg",
  },
  {
    src: "/gallery/image42.jpg",
  },
  {
    src: "/gallery/image43.jpg",
  },
  {
    src: "/gallery/image44.jpg",
  },
  {
    src: "/gallery/image45.jpg",
  },
  {
    src: "/gallery/image46.jpg",
  },
  {
    src: "/gallery/image47.jpg",
  },
  {
    src: "/gallery/image48.jpg",
  },
  {
    src: "/gallery/image49.jpg",
  },
  {
    src: "/gallery/image50.jpg",
  },
  {
    src: "/gallery/image51.jpg",
  },
  {
    src: "/gallery/image52.jpg",
  },
  {
    src: "/gallery/image53.jpg",
  },
  {
    src: "/gallery/image54.jpg",
  },
  {
    src: "/gallery/image55.jpg",
  },
  {
    src: "/gallery/image56.jpg",
  },
];

export default function Gallery({max_items}:{max_items:number}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto">
      {images.map((image, index) => (
        <Card key={index} className="max-w-sm">
          <CardBody className="p-0">
            <Image
              src={image.src}
              alt={image.src}
              width={400}
              height={300}
              className="w-full  object-fit"
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
