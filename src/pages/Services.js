import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import microderm from "../images/microderm.jpg";
import derma from "../images/derma.jpg";
import peel3 from "../images/peel3.jpg";
import eyetreatments1 from "../images/eyetreatments1.jpg";
import bodywax from "../images/bodywax.jpg";
import waxing1 from "../images/waxing1.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <Header />
      <div className="bg-white-bg flex flex-col w-full items-center py-24">
        <h1 className="font-licorice text-6xl font-bold text-yellow-600">
          Skin Care Services
        </h1>
      </div>
      <div className="flex flex-col w-full items-center">
        <p className="font-forum w-full py-10 text-center  font-bold text-gray-500 text-4xl">
          CLINICAL FACIALS
        </p>
        <div className="flex items-center px-10  w-full justify-between flex-col md:flex-row">
          <ServiceCard
            title="DERMAPLANING"
            description=" This non-invasive exfoliation technique immediately improves skin tone and texture. With the use of a surgical steel scalpel, dermaplaning gently removes the outermost layer of dead skin cells on the face. As an added bonus, it also removes vellus hair (peach fuzz) from the face.  It is safe for nearly all skin types."
            image={derma}
            time="45 MINUTES"
            price="$90"
          />
          <ServiceCard
            title="CHEMICAL PEEL"
            description="A chemical peel is a procedure in which a chemical solution is applied to the skin to remove the top layers. The skin that grows back is smoother. With a light or medium peel, you may need to undergo the procedure more than once to get the desired results. Chemical peels are used to treat wrinkles, discolored skin and scars."
            image={peel3}
            time="30 - 45 MINUTES"
            price="$75 - $150"
          />
          <ServiceCard
            title="MICRODERMABRASION"
            description="Microdermabrasion buffs, polishes, and resurfaces the skin with little to no downtime. With the use of a diamond tip, the skin is exfoliated and dead skin cells and the outmost layer of the epidermis is suctioned away. Visibly diminish fine lines, age spots, hyperpigmentation, photo-damage and improve skin’s texture."
            image={microderm}
            time="45 MINUTES"
            price="$90"
          />
        </div>
        <Link
          className="bg-gray-600 text-white font-bold rounded mb-10 p-5"
          to="/contact"
        >
          BOOK AN APPOINTMENT
        </Link>
      </div>

      <hr className="w-3/4 m-10" />
      <div className="flex flex-col w-full items-center">
        <p className="font-forum w-full py-10 text-center  font-bold text-gray-500 text-4xl">
          OTHER SERVICES
        </p>
        <div className="flex items-center px-10  w-full justify-between flex-col md:flex-row">
          <ServiceCard
            title="EYE CARE"
            description="NEED MORE THAN JUST A FACIAL? WANT THOSE EYES TO POP?
LET US TREAT YOU TO A LASH LIFT OR LASH AND BROW TINTING!"
            image={eyetreatments1}
            time="LASH LIFT"
            price="$50"
          />
          <ServiceCard
            title="BODY WAXING"
            description="A FULL FACE WAXING USUALLY REFERS TO THE CHEEKS, LIPS, AND SIDE FACE AND MAY INCLUDE THE NECK AND EARS."
            image={bodywax}
            time="PRICE VARIES"
            price="$50 - $150"
          />
          <ServiceCard
            title="FACIAL WAX"
            description="NEED TO BE SMOOTH FOR AN UPCOMING EVENT? WE BELIEVE IN A SWIFT AND PAINLESS  WAXING EXPERIENCE!"
            image={waxing1}
            time="FULL FACE"
            price="$30"
          />
        </div>
        <Link
          className="bg-gray-600 text-white font-bold rounded mb-10 p-5"
          to="/contact"
        >
          BOOK AN APPOINTMENT
        </Link>
        <hr className="w-3/4 mb-20" />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
