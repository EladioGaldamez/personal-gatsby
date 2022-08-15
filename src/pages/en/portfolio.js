import React from "react"
import { graphql } from "gatsby"
import OptimizedImage from "gatsby-image/withIEPolyfill"
import Layout from "../../components/layoutEN"
import SEO from "../../components/seo"
import Google from "../../components/logos/google"
import Barbless from "../../components/logos/barbless"
import Namecheap from "../../components/logos/namecheap"
import Studio31 from "../../components/logos/studio31"
import RecorridoAntigua from "../../components/logos/recorridoantigua"
import Ninja from "../../components/logos/ninja"

export const pageQuery = graphql`
  {
    lulus: file(relativePath: { eq: "lulus.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    barbless: file(relativePath: { eq: "barbless.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    barblessPodcast: file(relativePath: { eq: "barbless-podcast.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    recorridoAntigua: file(relativePath: { eq: "recorrido-antigua.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    datastax: file(relativePath: { eq: "datastax.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    donordesk: file(relativePath: { eq: "donordesk.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    walnut: file(relativePath: { eq: "thewalnutbuilding.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wewantyou: file(relativePath: { eq: "wewantyou.png" }) {
      sharp: childImageSharp {
        fluid(maxHeight: 540, maxWidth: 720, quality: 100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const PortfolioPage = ({ data }) => {
  const {
    lulus,
    barbless,
    barblessPodcast,
    recorridoAntigua,
    datastax,
    donordesk,
    walnut,
    wewantyou,
  } = data

  return (
    <Layout>
      <SEO
        title="Portfolio | Jos&eacute; Gald&aacute;mez"
        description="Take a look to the latest products developed from scratch."
      />
      <div className="container flex justify-between flex-wrap px-8 pt-4 md:p-12">
        <div className="flex flex-col text-center md:text-left w-full md:w-1/3">
          <h1 className="font-extrabold text-white text-4xl leading-tight md:text-6xl">
            Portfolio
          </h1>
        </div>
      </div>
      <div className="bg-tuna">
        <div className="container flex flex-col px-8 md:px-12">
          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={datastax.sharp.fluid}
              alt="DataStax"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                Website
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                DataStax
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2 order-1 md:order-2"
              fluid={barbless.sharp.fluid}
              alt="Barbless Website"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16  order-2 md:order-1 md:text-right">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line md:justify-end">
                Website
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                Barbless
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={barblessPodcast.sharp.fluid}
              alt="Barbless Podcast"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                Podcasting
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                Barbless Podcast
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2 order-1 md:order-2"
              fluid={donordesk.sharp.fluid}
              alt="Donor Desk Website"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16  order-2 md:order-1 md:text-right">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line md:justify-end">
                Website
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                Donor desk
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={lulus.sharp.fluid}
              alt="Lulus blog"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                Blog
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                Lulus
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2 order-1 md:order-2"
              fluid={wewantyou.sharp.fluid}
              alt="We Want You"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16  order-2 md:order-1 md:text-right">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line md:justify-end">
                web Application
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                We Want You
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2"
              fluid={recorridoAntigua.sharp.fluid}
              alt="Recorrido Antigua app"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line">
                Application
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                Recorrido Antigua
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap align-top w-full my-4 md:my-8">
            <OptimizedImage
              className="w-full md:w-1/2 order-1 md:order-2"
              fluid={walnut.sharp.fluid}
              alt="The Walnut Building"
              fadeIn={true}
              objectFit="contain"
              objectPosition="50% 50%"
            />

            <div className="w-full md:w-1/2 p-4 md:p-16  order-2 md:order-1 md:text-right">
              <span className="flex items-center font-semibold text-supernova text-sm md:text-base w-line md:justify-end">
                Website
              </span>
              <h1 className="font-bold text-white text-2xl leading-tight md:text-4xl mt-4">
                The Walnut Building Website
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-16 bg-rocks3">
        <div className="container flex justify-between flex-wrap px-8 md:px-12">
          <div className="flex flex-wrap items-center justify-between w-full">
            <a
              href="https://apigee.com"
              target="_blank"
              rel="noreferrer"
              title="apigee"
            >
              <span className="opacity-0">Apigee</span>
              <Google className="text-commet w-20 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://barbless.co"
              target="_blank"
              rel="noreferrer"
              title="barbless"
            >
              <span className="opacity-0">Barbless.co</span>
              <Barbless className="text-commet w-20 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            {/* <a href="https://burbankitchen.com"  target="_blank"rel="noreferrer" title="Burban kitchen"><BurbanKitchen className="text-commet w-24 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" /></a> */}
            <a
              href="https://teamninja.com"
              target="_blank"
              rel="noreferrer"
              title="team ninja"
            >
              <span className="opacity-0">Team ninja</span>
              <Ninja className="text-commet w-20 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.namecheap.com"
              target="_blank"
              rel="noreferrer"
              title="namecheap"
            >
              <span className="opacity-0">Namecheap</span>
              <Namecheap className="text-commet w-20 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://studio31.io"
              target="_blank"
              rel="noreferrer"
              title="studio 31"
            >
              <span className="opacity-0">Studio31</span>
              <Studio31 className="text-commet w-20 md:w-32 mx-2 md:mx-8 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://recorridoantigua.com"
              target="_blank"
              rel="noreferrer"
              title="recorrido antigua"
            >
              <span className="opacity-0">Recorrido Antigua</span>
              <RecorridoAntigua className="text-commet w-20 md:w-32 mx-2 md:mx-8 my-4 hover:text-white transition-all duration-200 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
