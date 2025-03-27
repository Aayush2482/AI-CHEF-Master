import logo from "../assets/cm2.png";

function Card() {
  return (
    <div className="bg-logo h-screen flex flex-col justify-center items-center pb-12">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="object-contain max-h-80" />
      </div>
      <div className="pb-50 text-center text-xl font-semibold">
        Experience the magic of our signature scents.
      </div>
    </div>
  );
}

export default Card;