import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import banner from "../images/banner.png";

function Home() {
  return (
    <div className="flex flex-col w-full mb-0">
      <Header />

      <div className="flex flex-col w-full">
        <img src={banner} alt="" className="w-full " />
      </div>

      <div className="flex flex-col w-full items-center lg:pt-5">
        <img
          src="https://images.squarespace-cdn.com/content/v1/599c4dfd59cc682fb9fecde7/1503956522032-WLLP2WOM02L8E5395XG9/Healing+Vibes+Esthetics+%7C+Skin+Care+%26+Esthetician+%7C+Denver+Highlands?format=300w"
          alt="shea"
          className=""
        />
        <h1 className="font-licorice font-bold text-3xl md:text-6xl lg:text-6xl xl:text-6xl">
          Skin Care Specialist in Jasper, Indiana
        </h1>
        <div className="flex flex-col  md:w-3/4 justify-center items-center p-8 md:p-10 text-center">
          <p className="text-center leading-loose md:leading-loose lg:leading-loose xl:leading-loose text-sm md:text-xl">
            Shea's Esthetics is a skincare oasis, offering advanced treatments
            to help you achieve youthful, radiant, rejuvenated skin. Every
            treatment is customized to specifically address your skincare goals.
            Whether you are concerned about fine lines and wrinkles,
            hyperpigmentation, acne, a dry & dull complexion, or you just wish
            to maintain your flawless skin, we will personalize a treatment plan
            to guide you on your journey for healthy, beautiful skin. Your time
            with us is not just a skincare treatment, we will help you
            disconnect and find balance from life's crazy schedule.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center p-2">
          <Link to="/contact" className="bg-gray-600 p-3 text-white rounded">
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="flex w-full p-3 items-center flex-col md:flex-row ">
        <div className="flex flex-col w-full items-center lg:px-56 ">
          <img
            src="https://images.pexels.com/photos/6724358/pexels-photo-6724358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="skinCare"
            className="w-40 h-40 rounded-full"
          />
          <p className="my-3 text-center text-lg md:text-2xl ">
            SKIN CARE SERVICES
          </p>
          <p className="text-center text-sm md:text-xl lg:px-30">
            Integrating customized treatments, high quality products, and
            advanced technologies.
          </p>
          <Link to="/services" className="bg-gray-600 p-3 text-white mt-5 rounded">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col w-full  items-center lg:px-56 ">
          <img
            src="https://magazine.lneonline.com/wp-content/uploads/2018/11/Busi_A3.jpg"
            alt="skinCare"
            className="w-40 h-40 rounded-full"
          />
          <p className="my-3 text-center text-lg md:text-2xl ">
            OTHER TREATMENTS
          </p>
          <p className="text-center text-sm md:text-xl lg:px-30 xl:px-30">
            Providing more than just facials, I proudly offer Waxing and more,
            all tailored to your needs.
          </p>
          <Link to="/services" className="bg-gray-600 p-3 text-white mt-5 rounded">
            Learn More
          </Link>
        </div>
      
      </div>

      <div className="flex flex-col w-full items-center justify-center lg:pt-5 ">
       <Footer/>
        </div>

    </div>
  );
}

export default Home;
