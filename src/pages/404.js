import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FiGithub, FiLinkedin} from "react-icons/fi"

const IndexPage = () => {
  return <Layout>
    <SEO
      title="Página no encontrada | Jos&eacute; Gald&aacute;mez"
      description="Esta página no existe."
    />
    <div className="container flex justify-between flex-wrap px-8 pt-4 pb-24 md:py-16 md:px-12">
      <div className="flex flex-col text-center w-full md:w-1/3">
        <span className="font-semibold text-supernova text-xl mb-2 md:text-5xl">404</span>
        <h1 className="font-extrabold text-white text-4xl leading-none md:text-6xl">Page not found</h1>

        <div className="hidden md:flex justify-center align-center mt-40">
          <a className="mr-8" href="https://github.com/eladiogaldamez" rel="noreferrer" target="_blank" title="github:EladioGaldamez"><span className="opacity-0">Github</span><FiGithub className="w-6 h-6 text-suit hover:text-white transition-all duration-200 ease-in-out" /></a>
          <a className="mr-8" href="https://www.linkedin.com/in/josegaldámez" rel="noreferrer" target="_blank" title="linkedin:EladioGaldamez"><span className="opacity-0">LinkedIn</span><FiLinkedin className="w-6 h-6 text-suit hover:text-white transition-all duration-200 ease-in-out" /></a>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage
