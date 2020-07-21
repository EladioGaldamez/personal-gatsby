import React from "react"
import { graphql } from "gatsby"
import OptimizedImage from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import Google from "../components/logos/google"
import Barbless from "../components/logos/barbless"
import Namecheap from "../components/logos/namecheap"
import Studio31 from "../components/logos/studio31"
import RecorridoAntigua from "../components/logos/recorridoantigua"
import Ninja from "../components/logos/ninja"

export const pageQuery = graphql`
  {
    lulus: file(relativePath: { eq: "lulus.png" }) {
      sharp: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    barblessPodcast: file(relativePath: { eq: "barbless-podcast.png" }) {
      sharp: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    recorridoAntigua: file(relativePath: { eq: "recorrido-antigua.png" }) {
      sharp: childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { lulus, barblessPodcast, recorridoAntigua } = data
  const experience = (new Date().getFullYear()) - 2015

  return <Layout>
    <div className="container flex justify-between flex-wrap px-8 pt-4 pb-24 md:py-16 md:px-12">
      <div className="flex flex-col text-center md:text-left w-full md:w-1/3">
        <span className="font-semibold text-supernova text-xl mb-2 md:text-5xl">Hola soy</span>
        <h1 className="font-extrabold text-white text-4xl leading-none md:text-6xl">José <br />Galdámez</h1>
      </div>
      <div className="flex flex-col justify-start md:justify-end w-full md:w-1/3 mt-16 md:mt-64">
        <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">Acerca de mí</span>
        <h1 className="font-extrabold text-white text-xl leading-none md:text-4xl mt-4">Desarrollador Web</h1>
        <p className="text-suit text-base md:text-xl leading-none mt-4">
          Antigüeño con {experience} años de experiencia Desarrollando productos que ayudan a resolver problemas.
          Soy estudiante de <a href="https://platzi.com">Platzi</a>, enfocado en desarrollo Backend y Frontend.
        </p>
      </div>
    </div>
    <div className="py-16 md:py-32 bg-rock3">
      <div className="container flex justify-between flex-wrap px-8 md:px-12">
        <div className="flex flex-col justify-start w-full md:w-1/3">
          <span className="flex items-center font-bold text-supernova text-sm md:text-base w-line">Clientes</span>
          <h1 className="font-extrabold text-white text-xl leading-none md:text-4xl mt-4">Marcas con las que he trabajado</h1>
          <p className="text-suit text-base md:text-xl leading-none mt-4">
            He trabajado con muchos clientes en Guatemala, El Salvador y Estados Unidos.
        </p>
        </div>
        <div className="flex flex-wrap items-center justify-between md:justify-end w-full md:w-2/3">
          <a href="https://apigee.com" target="_blank" rel="noreferrer" title="apigee"><Google className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a>
          <a href="https://barbless.co" target="_blank" rel="noreferrer" title="barbless"><Barbless className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a>
          {/* <a href="https://burbankitchen.com"  target="_blank"rel="noreferrer" title="Burban kitchen"><BurbanKitchen className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a> */}
          <a href="https://teamninja.com" target="_blank" rel="noreferrer" title="team ninja"><Ninja className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a>
          <a href="https://www.namecheap.com" target="_blank" rel="noreferrer" title="namecheap"><Namecheap className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a>
          <a href="https://studio31.io" target="_blank" rel="noreferrer" title="studio 31"><Studio31 className="text-commet w-24 md:w-40 mx-2 md:mx-8 hover:text-white transition-all duration-200 ease-in-out" /></a>
          <a href="https://recorridoantigua.com" target="_blank" rel="noreferrer" title="recorrido antigua"><RecorridoAntigua className="text-commet w-24 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a>
        </div>
      </div>
    </div>

    <div className="py-16 md:py-32 bg-tuna">
      <div className="container flex justify-between flex-wrap px-8 md:px-12">
        <div className="flex flex-col justify-start w-full md:w-1/2">
          <span className="flex items-center font-bold text-supernova text-sm md:text-base w-line">Portafolio</span>
          <h1 className="font-extrabold text-white text-xl leading-none md:text-4xl mt-4">Los proyectos más representativos</h1>
          <p className="text-suit text-base md:text-xl leading-none mt-4">Estos son algunos de los proyectos que he desarrollado</p>

          <OptimizedImage
            className="mt-8 pr-0 md:pr-8 md:mt-16 w-full"
            fluid={lulus.sharp.fluid}
            alt="Lulus blog"
            fadeIn={true}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>

        <div className="flex flex-col justify-start w-full md:w-1/2">
          <OptimizedImage
            className="mt-8 pl-0 md:pl-8 md:mt-16 w-full"
            fluid={barblessPodcast.sharp.fluid}
            alt="Barbless Podcast"
            fadeIn={true}
            objectFit="contain"
            objectPosition="50% 50%"
          />
          <OptimizedImage
            className="mt-8 pl-0 md:pl-8 md:mt-16 w-full"
            fluid={recorridoAntigua.sharp.fluid}
            alt="Recorrido Antigua app"
            fadeIn={true}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
      </div>
    </div>

  </Layout>
}

export default IndexPage
