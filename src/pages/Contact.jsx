export const Contact = () => {
  const handleFormSubmit = (formData) => {
    //
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="emil"
              className="from-control"
              placeholder="enter your email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              className="from-control"
              rows="10"
              placeholder="Enter your massage"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
