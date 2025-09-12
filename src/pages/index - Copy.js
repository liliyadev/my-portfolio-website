import * as React from "react"
import '../styles/global.css';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedReveal from "../components/AnimatedReveal";
import Typewriter from "../components/Typewriter";

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      {children}
    </motion.div>
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
    title: "Blog Platform",
    description: "Markdown-based blog built with Gatsby and GraphQL.",
    link: "https://github.com/liliyadev/blog-platform",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      {/* Animated Hero Section */}
      <motion.section className="w-full py-12 px-4 text-center">
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow">
          Welcome to my portfolio!
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Decorative blob */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 animate-blob"></div>

  <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center">
    {/* Left side: Text */}
    <div className="md:col-span-7 space-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        <Typewriter text="Hi, I'm Liliya 👋" />
        <span className="animate-pulse ml-2">|</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
      >
        I build elegant, performant web experiences with React, Gatsby, and Tailwind. I’ve led CMS refactors, scaled data pipelines, and delivered pixel-perfect UI across platforms.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-md"
      >
        View My Work
      </motion.a>
    </div>

    {/* Right side: Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="md:col-span-5 flex justify-center md:justify-end"
    >
      <StaticImage
        src="../images/me.jpg"
        alt="Liliya Vildanova"
        className="rounded-2xl w-64 md:w-80 shadow-xl transform hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
        
        
      </motion.section>

        
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full py-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <AnimatedReveal variant={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
        </AnimatedReveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedReveal key={index} variant={fadeInLeft} delay={index * 0.2} className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-indigo-600">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300" >{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline text-sm" 
                >
                   View →
                </a>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </motion.section>
          {/* Contact Section */}
      <motion.section id="contact" className="w-full py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Email me at:</p>
        <a href="mailto:liliya.vild@gmail.com" className="text-indigo-600 hover:underline">liliya.vild@gmail.com</a>
      </motion.section>
      
    </Layout>
  );
};



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
