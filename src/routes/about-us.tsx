
const About = () => {
  return (
<div className=" w-full pb-24">
      <div>
        <div className="my-12 mx-65">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline  font-extrabold md:text-8xl">
              About AI Superpower
            </span>
            <span className="text-gray-500  font-extrabold">
              - Revolutionizing Interviews
            </span>
          </h2>

          <p className="mt-8  text-muted-foreground text-xl">
            AI Superpower is an innovative platform designed to transform the
            way you prepare for interviews. Our mission is to leverage advanced
            AI technology to make interview preparation smarter, more efficient,
            and tailored to your individual needs.
          </p>

          <p className="mt-4  text-muted-foreground text-xl">
            Whether you're a job seeker, a student preparing for campus
            placements, or a professional looking to switch careers, AI
            Superpower provides personalized guidance. Our AI-powered system
            simulates real interview experiences, offers instant feedback, and
            helps you improve in real-time.
          </p>

          <p className="mt-4  text-muted-foreground text-xl">
            With interactive mock interviews, dynamic question generation, and
            in-depth analytics, we ensure that you're not just prepared but
            confident in facing any challenge. Join us in redefining interview
            readiness with technology-driven insights and expert advice.
          </p>
        </div>

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px]drop-shadow-md  ">
          <img
            src="/assets/img/aboutus.jpg"
            alt="About AI Superpower"
            className="w-full h-full object-cover"
          />
        </div>

    
      </div>
    </div>
  )
}

export default About