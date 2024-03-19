import React from "react";
import img1 from "../assets/img/dest1.jpg";

import img2 from "../assets/img/dest1.jpg";

import img3 from "../assets/img/dest3.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img="https://images.unsplash.com/photo-1562462279-e4f2b1a28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Pokhara"
          para="Pokhara: where the beauty of Fewa Lake harmonizes with the charm of the cityscape."
        />
        <DestinationCard
          img="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title=""
          para="
Namche Bazaar: The vibrant Sherpa trading hub nestled in the heart of the Himalayas, serving as a gateway to Everest Base Camp."
        />
        <DestinationCard
          img="https://images.unsplash.com/photo-1602102488252-c4c3daadf1c2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Ilam"
          para="Ilam: A picturesque hill town renowned for its lush tea gardens and breathtaking views of the Himalayas."
        />
      </div>
    </div>
  );
};

export default Destination;
