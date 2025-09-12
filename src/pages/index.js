import * as React from "react"
import '../styles/global.css';
import { Link } from "gatsby"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedReveal from "../components/AnimatedReveal";
import Typewriter from "../components/Typewriter";
import { StaticImage } from "gatsby-plugin-image";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../animations/variants";

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AnimatedCard = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'relative' }}
    >
      {children}
    </div>
  );
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

<Link to="/page-2" className="text-indigo-600 underline">
  Go to Page 2 →
</Link>


const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const projects = [
  {
    title: "Portfolio Website",
    description: "Built with Gatsby and Tailwind CSS. Fully responsive and fast.",
    link: "https://github.com/liliyadev/portfolio",
  },
  {
    title: "Weather App",
    description: "Uses OpenWeather API and React hooks for live forecasts.",
    link: "https://github.com/liliyadev/weather-app",
  },
  {
    title: "Built with Gatsby. Raised with love.",
    description: "It’s a little markdown-powered space where I share what I’m learning, building, and dreaming. No frills—just honest bytes from my journey.",
    link: "https://blog.liliyadev.ca",
  },
];

const IndexPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <Layout>
      {/* Animated Hero Section */}
<section className="w-full m-0 p-0 pt-24">
  <div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full clip-vertical-trapezium bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 animate-gradient text-white shadow-2xl"
        >
    <div className="w-full flex flex-col md:flex-row py-20 gap-12 px-4 md:pl-4 mx-auto items-center">
      {/* Image: 1/3 of the card */}
  <div className="w-full md:w-1/3 flex justify-center items-center px-4 md:px-0 md:pl-24">
    <StaticImage
      src="../images/DevArt.png"
      alt="Liliya Vildanova"
      className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto p-6 pt-30"
    />
    {/*<StaticImage
      src="../images/me.png"
      alt="Liliya Vildanova"
      className="w-full max-w-[400px] h-auto rounded-xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
    />*/}
  </div>
  {/* Text: 2/3 of the card */}
  <div className="w-full md:w-2/3 text-left px-6 md:px-12">
  {/*<h1 className="text-6xl font-display font-bold tracking-wide mb-6">
    <Typewriter text="Hi, I'm Liliya 👩‍🎨" speed={80} />
    <span className="animate-pulse ml-2">|</span>
  </h1>*/}
  <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-3xl font-display leading-relaxed text-white"
>
  <Typewriter
    text="I design with empathy, build with precision, and refine until every interaction tells a story worth remembering."
    speed={60}
  />
</motion.h1>

  <a
  href="#projects"
  className="inline-block text-3xl font-semibold text-white border-2 border-white rounded-full px-8 py-4 bg-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
>
  My Work
</a>

</div>
  
</div>
  </div>
</section>
<section className="w-full m-0 p-0">
  <div
    ref={ref}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full"
  >
    <div className="w-full flex flex-col md:flex-row py-20 gap-12 px-4 md:pl-0 mx-auto items-center">
      {/* Text: 2/3 of the card */}
      <div className="w-full md:w-auto justify-left px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[#2563eb]">I’m a front-end developer from Toronto.</h2>
        <p className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed text-gray-100 mb-6">
          I design and build elegant, performant web experiences using React, Gatsby, and Tailwind CSS. My work spans everything from CMS refactors to scalable UI systems, and I bring creative precision to every pixel I touch.
        </p>
        <p className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed text-gray-100 mb-6">
          Recently, I’ve been expanding into backend development, exploring API architecture and integration with tools like Node.js and FastAPI. Whether I’m building a weather dashboard or architecting a markdown-based blog, I focus on clean code, accessibility, and thoughtful collaboration.
        </p>
      </div>
      {/* Image: 1/3 of the card */}
      <div className="w-full md:w-1/3 flex justify-center items-center px-0 mx-auto">
        <StaticImage
          src="../images/about-illustration.png"
          alt="Developer illustration"
          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full py-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <AnimatedReveal variant={fadeInUp}>
          <h2 className="text-4xl font-bold mb-6 text-[#2563eb] text-center">Projects</h2>
        </AnimatedReveal>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 w-full">
          {projects.map((project, index) => (
            <AnimatedReveal key={index} variant={fadeInLeft} delay={index * 0.2} className="h-full flex flex-col justify-between gap-8 px-6 py-12 max-w-2xl mx-auto">
              <div className="h-full flex flex-col justify-between col-span-1 w-full bg-white text-black border-2 border-[#2563eb] rounded-xl p-6 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4" >{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-medium hover:underline" 
                >
                   View →
                </a>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </motion.section>
          {/* Contact Section */}
      {/*}
      <form
  name="contact"
  method="POST"
  data-netlify="true"
  className="max-w-xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6"
>
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-[#2563eb] text-white font-semibold py-3 rounded-md hover:bg-[#1e4ed8] transition-colors duration-300"
  >
    Send Message
  </button>
</form>*/}

      
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage
