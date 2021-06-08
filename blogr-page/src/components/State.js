import image from "../images/illustration-phones.svg";

const State = () => {
  return (
    <section className="state">
      <div className="state-overlay">
        <img src={image} alt="" />
        <div className="info-div" p-10 m-10>
          <h1 className="p-5">State of the Art Infrastructure</h1>
          <p className="text-white p-5">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default State;
