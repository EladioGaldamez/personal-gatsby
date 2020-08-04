import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import OptimizedImage from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"

export const pageQuery = graphql`
  {
    discover: file(relativePath: { eq: "discover.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    papaplaza: file(relativePath: { eq: "papaplaza.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    travel: file(relativePath: { eq: "travel.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const ChallengesPage = ({ data }) => {
  const { discover, papaplaza, travel } = data

  return (
    <Layout>
      <SEO
        title="Retos | Jos&eacute; Gald&aacute;mez"
        description="Me encantan los retos, por eso me reto a mi mismo dandole vida a ideas propias o de diseñadores de todas partes del mundo"
      />
      <div className="container flex justify-between flex-wrap px-8 pt-4 md:p-12">
        <div className="flex flex-col text-center md:text-left w-full md:w-1/3">
          <h1 className="font-extrabold text-white text-4xl leading-none md:text-6xl">
            Retos
          </h1>
        </div>
      </div>
      <div className="bg-tuna">
        <div className="container flex flex-col px-8 md:px-12">
          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={discover.sharp.fluid}
              alt="Discover"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                HTML, CSS, JS
              </span>
              <h1 className="font-bold text-white text-2xl leading-none md:text-4xl mt-4">
                Discover
              </h1>
              <p className="text-suit text-base md:text-xl leading-none mt-4">
                Este proyecto es un reto personal, el cual consiste en tomar un
                diseño de dribbble y convertirlo en un markup de HTML. En este
                caso, este proyecto fue tomado de un{" "}
                <a
                  href="https://dribbble.com/shots/5260018-More-Holiday"
                  rel="referrer noopener"
                >
                  post de dribbble
                </a>
                , utilizando fake data.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2 order-1 md:order-2"
              fluid={papaplaza.sharp.fluid}
              alt="Papaplaza"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16  order-2 md:order-1 md:text-right">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line md:justify-end">
                React JS
              </span>
              <h1 className="font-bold text-white text-2xl leading-none md:text-4xl mt-4">
                Papaplaza Resto
              </h1>
              <p className="text-suit text-base md:text-xl leading-none mt-4">
                Este proyecto es un reto personal, el cual consiste en tomar un
                diseño de dribbble y convertirlo en un markup de React JS. En
                este caso, este proyecto fue tomado de un{" "}
                <a
                  href="https://www.behance.net/gallery/90185469/Food-Website"
                  rel="referrer noopener"
                >
                  post de behance
                </a>
                , utilizando fake data.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={travel.sharp.fluid}
              alt="Travel"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                React
              </span>
              <h1 className="font-bold text-white text-2xl leading-none md:text-4xl mt-4">
                Travel Agency
              </h1>
              <p className="text-suit text-base md:text-xl leading-none mt-4">
                Este proyecto es un reto personal, el cual consiste en tomar un
                diseño de dribbble y convertirlo en un markup de React JS. En
                este caso, este proyecto fue tomado de un{" "}
                <a
                  href="https://www.instagram.com/p/B6IY47tBnb8/"
                  rel="referrer noopener"
                >
                  post de instagram
                </a>
                , utilizando fake data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChallengesPage
