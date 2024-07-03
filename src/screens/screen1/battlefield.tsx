function Battlefield() {
  return (
    <div className="scroll-snap relative h-screen w-full">
      <div
        className={"absolute inset-0 )] bg-cover bg-center  bg-[url(bg1.jpeg)]"}
        // style={{ backgroundImage: "url(bg1.jpeg)" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#18365f] to-transparent"></div>
    </div>
  );
}

export default Battlefield;
