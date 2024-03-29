import React from "react"
import { graphql } from "gatsby"
import OptimizedImage from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Google from "../components/logos/google"
import Barbless from "../components/logos/barbless"
import Namecheap from "../components/logos/namecheap"
import Studio31 from "../components/logos/studio31"
import DataStax from "../components/logos/datastax"
import RecorridoAntigua from "../components/logos/recorridoantigua"
import BurbanKitchen from "../components/logos/burbankitchen"
import DonorDesk from "../components/logos/donordesk"
import Ninja from "../components/logos/ninja"
import Platzi from "../components/logos/platzi"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import RandomIcons from "../components/randomIcons"

export const pageQuery = graphql`
  {
    barbless: file(relativePath: { eq: "barbless.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 1280, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    datastax: file(relativePath: { eq: "datastax.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 1280, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    donordesk: file(relativePath: { eq: "donordesk.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 1280, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { datastax, donordesk, barbless } = data

  return (
    <Layout>
      <SEO
        title="Jos&eacute; Gald&aacute;mez"
        description="Antig&uuml;e&ntilde;o, Desarrollador web, y entusiata de la tecnolog&iacute;a"
      />
      <div className="relative container flex justify-between flex-wrap px-8 pt-4 pb-24 md:py-16 md:px-12">
        <div className="z-10 flex flex-col text-center md:text-left w-full md:w-1/3">
          <span className="font-semibold text-supernova text-xl mb-2 md:text-5xl">
            Hola, soy
          </span>
          <h1 className="font-extrabold text-white text-4xl leading-tight md:text-6xl">
            José <br />
            Galdámez
          </h1>

          <div className="hidden md:flex mt-40">
            <a
              className="mr-8"
              href="https://github.com/eladiogaldamez"
              rel="noreferrer"
              target="_blank"
              title="github:EladioGaldamez"
            >
              <span className="opacity-0">Github</span>
              <FaGithub className="w-6 h-6 text-suit hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              className="mr-6"
              href="https://www.linkedin.com/in/josegaldámez"
              rel="noreferrer"
              target="_blank"
              title="linkedin:EladioGaldamez"
            >
              <span className="opacity-0">LinkedIn</span>
              <FaLinkedinIn className="w-6 h-6 text-suit hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              className="mr-8"
              href="https://platzi.com/p/jgaldamez/"
              rel="noreferrer"
              target="_blank"
              title="platzi:jgaldamez"
            >
              <span className="opacity-0">Platzi</span>
              <Platzi className="w-6 h-6 text-suit hover:text-white transition-all duration-200 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-start md:justify-end w-full md:w-1/3 mt-16 md:mt-64">
          <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
            Acerca de mí
          </span>
          <h1 className="font-extrabold text-white text-xl leading-tight md:text-4xl mt-4">
            Desarrollador Web
          </h1>
          <p className="text-suit text-base md:text-xl leading-tight mt-4">
            Antig&uuml;e&ntilde;o, Desarrollador web y entusiasta de la
            tecnolog&iacute;a. Desarrollando productos que ayudan a resolver
            problemas. Estudiante de <a href="https://platzi.com">Platzi</a>.
          </p>
        </div>

        <RandomIcons />
      </div>
      <div className="py-16 md:py-32 bg-rock3">
        <div className="container flex justify-between flex-wrap px-8 md:px-12">
          <div className="flex flex-col justify-start w-full md:w-1/3">
            <span className="flex items-center font-bold text-supernova text-sm md:text-base w-line">
              Clientes
            </span>
            <h1 className="font-extrabold text-white text-xl leading-tight md:text-4xl mt-4">
              Marcas con las que he trabajado
            </h1>
            <p className="text-suit text-base md:text-xl leading-tight mt-4">
              He trabajado con clientes en Guatemala, El Salvador y
              Estados Unidos.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between md:justify-end w-full md:w-2/3">
            <a
              href="https://apigee.com"
              target="_blank"
              rel="noreferrer"
              title="apigee"
            >
              <span className="opacity-0">Apigee</span>
              <Google className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://barbless.co"
              target="_blank"
              rel="noreferrer"
              title="barbless"
            >
              <span className="opacity-0">Barbless.co</span>
              <Barbless className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://teamninja.com"
              target="_blank"
              rel="noreferrer"
              title="team ninja"
            >
              <span className="opacity-0">Team ninja</span>
              <Ninja className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.namecheap.com"
              target="_blank"
              rel="noreferrer"
              title="namecheap"
            >
              <span className="opacity-0">Namecheap</span>
              <Namecheap className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://studio31.io"
              target="_blank"
              rel="noreferrer"
              title="studio 31"
            >
              <span className="opacity-0">Studio31</span>
              <Studio31 className="text-commet w-20 md:w-40 mx-2 md:mx-8 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.datastax.com"
              target="_blank"
              rel="noreferrer"
              title="recorrido antigua"
            >
              <span className="opacity-0">DataStax</span>
              <DataStax className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.burbankitchen.com"
              target="_blank"
              rel="noreferrer"
              title="recorrido antigua"
            >
              <span className="opacity-0">Burban Kitchen</span>
              <BurbanKitchen className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://donordesk.co/"
              target="_blank"
              rel="noreferrer"
              title="recorrido antigua"
            >
              <span className="opacity-0">DonorDesk</span>
              <DonorDesk className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://recorridoantigua.com"
              target="_blank"
              rel="noreferrer"
              title="recorrido antigua"
            >
              <span className="opacity-0">Recorrido Antigua</span>
              <RecorridoAntigua className="text-commet w-20 md:w-40 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-32 bg-tuna">
        <div className="container flex justify-between flex-wrap px-8 md:px-12">
          <div className="flex flex-col justify-start w-full md:w-1/2">
            <span className="flex items-center font-bold text-supernova text-sm md:text-base w-line">
              Portafolio
            </span>
            <h1 className="font-extrabold text-white text-xl leading-tight md:text-4xl mt-4">
              Los proyectos más representativos
            </h1>
            <p className="text-suit text-base md:text-xl leading-tight mt-4">
              Estos son algunos de los proyectos que he desarrollado
            </p>

            <OptimizedImage
              className="mt-8 pr-0 md:pr-8 md:mt-16 w-full"
              fluid={datastax.sharp.fluid}
              alt="DataStax"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>

          <div className="flex flex-col justify-start w-full md:w-1/2">
            <OptimizedImage
              className="mt-8 pl-0 md:pl-8 md:mt-16 w-full"
              fluid={barbless.sharp.fluid}
              alt="Barbless"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />
            <OptimizedImage
              className="mt-8 pl-0 md:pl-8 md:mt-16 w-full"
              fluid={donordesk.sharp.fluid}
              alt="DonorDesk Website"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
