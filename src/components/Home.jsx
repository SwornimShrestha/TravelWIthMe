import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg";
const Home = () => {
  const backgroundColor = "bg-brightColor";
  return (
    <div className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5 ">
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className="font-semibold text-5xl leading-tight">
          Discover the Best Destinations
        </h1>
        <p className="">
          With TripWithMe you can experience new travel and the best tourist
          destinations that we have to offer
        </p>
        <div className="lg:pl-22">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Destintaion" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div className="mt-14 lg:mt-0 w-full lg:w-4/5">
        <img
          src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
