import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Your Gateway to <br /> Global Knowledge
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;

          return (
            <div className="card" key={id}>
              <div className="container-card bg-white-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: {capital}</span>
                </p>
                <p>
                  <span className="card-description">
                    Population: {population}
                  </span>
                </p>
                <p>
                  <span className="card-description">
                    Interesting Fact: {interestingFact}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
