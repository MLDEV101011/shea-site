import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="justify-center flex-col md:flex-row lg:flex mx-10 md:m-20 wrap lg:mx-52">
        <img
          className="h-96 "
          src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/257371822_10219365865313971_4842012191330253087_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QSUbI4U7sMgAX8imDPN&_nc_ht=scontent-iad3-2.xx&oh=00_AT_1zXWE_yqppyHL38aH-ApPEEFdB7UEb8YgkaWowXib1A&oe=61DB7C3A"
          alt=""
        />
        <div className=" md:px-10">
          <h1 className="text-2xl text-center md:text-left">MEET SHEA</h1>
          <p className="text-sm mt-2 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            risus pretium quam vulputate dignissim suspendisse in est. Id ornare
            arcu odio ut sem nulla. Nunc sed blandit libero volutpat sed cras.
            Neque volutpat ac tincidunt vitae semper. Luctus accumsan tortor
            posuere ac ut. Diam quam nulla porttitor massa. Enim tortor at
            auctor urna nunc. Purus faucibus ornare suspendisse sed nisi lacus
            sed viverra. Est ullamcorper eget nulla facilisi etiam dignissim
            diam. Eget gravida cum sociis natoque penatibus et magnis.
            Ullamcorper morbi tincidunt ornare massa eget. Id donec ultrices
            tincidunt arcu non sodales neque. Enim facilisis gravida neque
            convallis a cras semper auctor neque. Ultrices mi tempus imperdiet
            nulla malesuada pellentesque elit. Sed velit dignissim sodales ut eu
            sem integer. Ut pharetra sit amet aliquam id diam maecenas
            ultricies. Ut aliquam purus sit amet luctus venenatis lectus magna.
            Lectus sit amet est placerat in egestas erat.
          </p>
          <p className="text-sm mt-5 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            risus pretium quam vulputate dignissim suspendisse in est. Id ornare
            arcu odio ut sem nulla. Nunc sed blandit libero volutpat sed cras.
            Neque volutpat ac tincidunt vitae semper. Luctus accumsan tortor
            posuere ac ut. Diam quam nulla porttitor massa. Enim tortor at
            auctor urna nunc. 
          </p>

        </div>
      </div>
      <div className="flex justify-center m-10 text-center flex-col">
      <hr className="self-center w-3/4 m-10 text-center" />
        <p>QUALIFICATIONS</p>
        <p className="text-sm md:m-5 md:mb-28 md:mx-80 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            risus pretium quam vulputate dignissim suspendisse in est. Id ornare
            arcu odio ut sem nulla.
          </p>
      </div>      
      <Footer  />
    </div>
  );
}

export default About;
