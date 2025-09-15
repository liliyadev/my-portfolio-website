/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Navbar from "./Navbar";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  

  return (
    <>
      <Navbar /> {/* Add this line here */}
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <div>
        <div className="w-full m-0 p-0">
          <main>{children}</main>
          <section className="relative bg-blue-700 text-white pt-32 pb-20 overflow-hidden">
  {/* Layered Waves Behind Form */}
  <div className="absolute top-0 left-0 w-full z-0">
  {/* Wave 1 */}
  <svg className="w-full h-[20rem] rotate-180" viewBox="0 0 900 320" preserveAspectRatio="none">
    <path
      fill="#1e3a8a"
      fillOpacity="1"
      d="M0 205L13.7 186C27.3 167 54.7 129 82 112C109.3 95 136.7 99 163.8 112C191 125 218 147 245.2 173C272.3 199 299.7 229 327 240C354.3 251 381.7 243 409 227C436.3 211 463.7 187 491 180C518.3 173 545.7 183 573 175C600.3 167 627.7 141 654.8 133C682 125 709 135 736.2 145C763.3 155 790.7 165 818 173C845.3 181 872.7 187 886.3 190L900 193L900 0L886.3 0C872.7 0 845.3 0 818 0C790.7 0 763.3 0 736.2 0C709 0 682 0 654.8 0C627.7 0 600.3 0 573 0C545.7 0 518.3 0 491 0C463.7 0 436.3 0 409 0C381.7 0 354.3 0 327 0C299.7 0 272.3 0 245.2 0C218 0 191 0 163.8 0C136.7 0 109.3 0 82 0C54.7 0 27.3 0 13.7 0L0 0Z"
    />
  </svg>

  {/* Wave 2 */}
  <svg className="w-full h-[20rem] -mt-12 animate-wave delay-500" viewBox="0 0 900 320" preserveAspectRatio="none">
    <path
      fill="#2563eb"
      fillOpacity="0.7"
      d="M0 415L13.7 401C27.3 387 54.7 359 82 348C109.3 337 136.7 343 163.8 342C191 341 218 333 245.2 340C272.3 347 299.7 369 327 377C354.3 385 381.7 379 409 373C436.3 367 463.7 361 491 353C518.3 345 545.7 335 573 336C600.3 337 627.7 349 654.8 355C682 361 709 361 736.2 351C763.3 341 790.7 321 818 316C845.3 311 872.7 321 886.3 326L900 331L900 191L886.3 188C872.7 185 845.3 179 818 171C790.7 163 763.3 153 736.2 143C709 133 682 123 654.8 131C627.7 139 600.3 165 573 173C545.7 181 518.3 171 491 178C463.7 185 436.3 209 409 225C381.7 241 354.3 249 327 238C299.7 227 272.3 197 245.2 171C218 145 191 123 163.8 110C136.7 97 109.3 93 82 110C54.7 127 27.3 165 13.7 184L0 203Z"
    />
  </svg>

  {/* Wave 3 */}
  <svg className="w-full h-[0rem] -mt-12 animate-wave delay-1000" viewBox="0 0 900 320" preserveAspectRatio="none">
    <path
      fill="#3b5df6ff"
      fillOpacity="0.5"
      d="M0 475L13.7 468C27.3 461 54.7 447 82 433C109.3 419 136.7 405 163.8 398C191 391 218 391 245.2 403C272.3 415 299.7 439 327 450C354.3 461 381.7 459 409 458C436.3 457 463.7 457 491 451C518.3 445 545.7 433 573 433C600.3 433 627.7 445 654.8 444C682 443 709 429 736.2 420C763.3 411 790.7 407 818 407C845.3 407 872.7 411 886.3 413L900 415L900 329L886.3 324C872.7 319 845.3 309 818 314C790.7 319 763.3 339 736.2 349C709 359 682 359 654.8 353C627.7 347 600.3 335 573 334C545.7 333 518.3 343 491 351C463.7 359 436.3 365 409 371C381.7 377 354.3 383 327 375C299.7 367 272.3 345 245.2 338C218 331 191 339 163.8 340C136.7 341 109.3 335 82 346C54.7 357 27.3 385 13.7 399L0 413Z"
    />
  </svg>
</div>



  {/* Contact Form + Footer Content */}
  {/*<section className="w-full py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">*/}
  <div id="contact" className="flex justify-end md:pr-24 ">
    <div className="relative z-10 w-full md:w-1/2 lg:w-1/3 bg-white text-black p-8 rounded-xl shadow-xl space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-[#2563eb]">Get in Touch</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white font-semibold py-3 rounded-md hover:bg-[#1e4ed8] transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
      
    </div>
  </div>
  <div className="w-full mt-16 flex justify-center">
    <p className="text-sm text-gray-100 text-center">
      © 2025 Liliya Vildanova. All rights reserved.
    </p>
  </div>
</section>

        </div>

      </div>
    </>
  )
}

export default Layout
