import React from "react"
import { graphql, Link } from "gatsby"
import OptimizedImage from "gatsby-image/withIEPolyfill"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const pageQuery = graphql`
  {
    jose: file(relativePath: { eq: "jose.jpeg" }) {
      sharp: childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const CV = ({ data }) => {
  const { jose } = data
  return <>
    <header className="mt-16 container flex flex-wrap items-center justify-center md:justify-between">
      <div className="flex items-center justify-center">
        <OptimizedImage
          className="rounded-full h-40 w-40 flex items-center justify-center"
          fluid={jose.sharp.fluid}
          alt="José Galdámez"
          fadeIn={true}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>

      <div className="flex flex-col text-center justify-center px-4">
        <h1 className="font-extrabold text-white text-4xl leading-tight md:text-6xl">José Galdámez</h1>
        <p className="font-semibold text-supernova text-xl mb-2 md:text-3xl">Desarrollador web</p>
      </div>
    </header>

    <main className="container my-20 md:my-24 flex flex-wrap">
      <div className="w-full md:w-1/3 px-4 md:pr-8 mb-24 md:mb-0">
        <table className="table-fixed">
          <tbody>
            <tr className="align-top">
              <td className="py-2 pr-4">
                <strong className="text-white">Nombre:</strong>
              </td>
              <td className="py-2 pl-4">
                <span className="text-suit">José Eladio Galdámez Barrera</span>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 pr-4">
                <strong className="text-white">Dirección:</strong>
              </td>
              <td className="py-2 pl-4">
                <span className="text-suit">Antigua Guatemala, Sacatepéquez, Guatemala.</span>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 pr-4">
                <strong className="text-white">Correo electrónico:</strong>
              </td>
              <td className="py-2 pl-4">
                <a href="mailto:eladio.galdamez@gmail.com" className="text-suit hover:text-white transition-all duration-200 ease-in-out">eladio.galdamez@gmail.com</a>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 pr-4">
                <strong className="text-white">Portafolio:</strong>
              </td>
              <td className="py-2 pl-4">
                <Link to="/" className="text-suit hover:text-white transition-all duration-200 ease-in-out">/portafolio</Link>
              </td>
            </tr>

            <tr>
              <td className="pt-8"></td>
              <td className="pt-8"></td>
            </tr>

            <tr className="align-top">
              <td className="py-2 pr-4">
                <FaGithub className="w-6 h-6 text-white" />
              </td>
              <td className="py-2 pl-4">
                <a className="text-suit hover:text-white transition-all duration-200 ease-in-out" href="https://github.com/eladiogaldamez" rel="noreferrer" target="_blank" title="github:EladioGaldamez">
                  /eladiogaldamez
                </a>
              </td>
            </tr>

            <tr className="align-top">
              <td className="py-2 pr-4">
                <FaLinkedinIn className="w-6 h-6 text-white" />
              </td>
              <td className="py-2 pl-4">
                <a className="text-suit hover:text-white transition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/josegaldámez" rel="noreferrer" target="_blank" title="linkedin:EladioGaldamez">
                  /josegaldámez
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full md:w-2/3 px-4 md:pl-8">
        <div className=" border-l-2 border-gray-500">
          <div className="relative w-full pl-16">
            <span class="circle-start"></span>
            <h2 className="font-extrabold text-white text-xl leading-tight md:text-2xl mb-2">Introducción</h2>
            <p className="text-suit">Antigüeño, Desarrollador web y entusiata de la tecnología. Desarrollando productos que ayudan a resolver problemas. Estudiante de Platzi.</p>
          </div>

          <div className="relative w-full mt-16 pl-16">
            <span class="circle-start"></span>
            <h2 className="font-extrabold text-white text-xl leading-tight md:text-2xl mb-2">Aptitudes</h2>
            <h3 className="font-bold text-gainsboro text-lg leading-tight md:text-xl mb-1">Desarrollo Frontend</h3>
            <ul className="list-disc ml-4 text-suit">
              <li>Ojo al detalle.</li>
              <li>Estilos funcionales en múltiples buscadores.</li>
              <li>Desarrollo con ReactJS, VueJS y AngularJS.</li>
              <li>Uso de frameworks cómo Bootstrap, Tailwindcss, Bulma, MaterializeCSS.</li>
              <li>Desarrollo de propias herramientas para automatizar procesos de estilos.</li>
            </ul>
            <h3 className="font-bold text-gainsboro text-lg leading-tight md:text-xl mt-4 mb-1">Desarrollo Backend</h3>
            <ul className="list-disc ml-4 text-suit">
              <li>Desarrollo de Base de Datos.</li>
              <li>Análisis de fallas.</li>
              <li>Manejo de Servidores.</li>
              <li>Conocimiento de múltiples lenguajes.</li>
            </ul>
          </div>

          <div className="relative w-full mt-16 pl-16">
            <span class="circle-start"></span>
            <h2 className="font-extrabold text-white text-xl leading-tight md:text-2xl mb-2">Experiencia</h2>

            <ul className="list-disc ml-4 text-suit">
              <li>
                <h3 className="font-bold text-gainsboro text-lg leading-tight md:text-xl mt-4">Studio 31, Desarrollador Web</h3>
                <span className="block text-suit text-xs mb-4">Septiembre del 2017 - Actualidad, Guatemala</span>
                <p className="text-suit">Desarrollo de Sitios web y aplicaciones web.</p>
              </li>
              <li>
                <h3 className="font-bold text-gainsboro text-lg leading-tight md:text-xl mt-4">PC Solutions, Desarrollador</h3>
                <span className="block text-suit text-xs mb-4">Noviembre del 2015 - Agosto del 2017, Guatemala</span>
                <p className="text-suit">Desarrollo de aplicaciones windows, para manejo de inventarios y sistemas contables.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  </>
}

export default CV