
const Contact = () => {
  return (
    <div className="flex-col w-full pb-24">
      <div>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Contact Us
            </span>
            <span className="text-gray-500 font-extrabold">
              {" "}
              - Let’s Connect
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Have questions or feedback? We'd love to hear from you! Reach out
            via email or social media, and we'll be happy to assist you.
          </p>
        </div>

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/contactus.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
