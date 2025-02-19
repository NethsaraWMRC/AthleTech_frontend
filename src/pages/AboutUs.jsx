import "../styles/AboutUs.css";

const committeeMembers = [
  {
    name: "Samodh Dharmaraja",
    phone: "+94 77 677 4768",
    image: "src/assets/images/AboutUsImages/samod 1.1.jpg",
  },
  {
    name: "Dulith Dilshan",
    phone: "+94 76 935 1593",
    image: "src/assets/images/AboutUsImages/Dulith.jpg",
  },
  {
    name: "Janith Ravishanka",
    phone: "+94 76 668 1593",
    image: "src/assets/images/AboutUsImages/Janith 1.1.jpg",
  },
  {
    name: "Ravindu Nethsara ",
    phone: "+94 77 556 6553",
    image: "src/assets/images/AboutUsImages/Ravindu.jpg",
  },
  {
    name: "Ishari Abeysooriya",
    phone: "+94 71 592 1566",
    image: "src/assets/images/AboutUsImages/Ishari.jpg",
  },
  {
    name: "Himesha Kodithuwakku",
    phone: "+94 77 668 6553",
    image: "src/assets/images/AboutUsImages/Himesha.jpg",
  },
  {
    name: "Miththika Samarathunga",
    phone: "+94 77 668 6553",
    image: "src/assets/images/AboutUsImages/Miththika.jpg",
  },
  {
    name: "Sanudi Perera",
    phone: "+94 76 974 7344",
    image: "src/assets/images/AboutUsImages/Sanudi.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Section */}
      <section className="about-section ">
        <div className="about-image">
          <img
            src="src/assets/images/AboutUsImages/12.jpg"
            alt="Athlete in starting position"
          />
        </div>
        <div className="about-content">
          <h2>About us</h2>
          <p>
            Through peak performance and unwavering dedication, AthletechX
            redefines how athletes engage with their sport. Connecting
            competitors, coaches, and industry leaders, we create a seamless
            experience where every event registration, coaching connection, and
            opportunity is just a step away.
          </p>
          <p>
            Through innovation and passion, we elevate athletic careers—bridging
            the gap between ambition and achievement. Events unfold, rankings
            rise, and connections grow, shaping the future of sports.
          </p>
        </div>
      </section>

      {/* Organizing Committee Section */}
      {/* <section className="committee-section">
        <h2>Organizing Committee</h2>
        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <div key={index} className="committee-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.phone}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="committee-section">
        <h2>Organizing Committee</h2>
        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <a
              key={index}
              href={`tel:${member.phone}`}
              className="committee-member"
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.phone}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
