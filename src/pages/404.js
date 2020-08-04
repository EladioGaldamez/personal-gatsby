import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Página no encontrada | Jos&eacute; Gald&aacute;mez"
        description="Esta página no existe."
      />
      <div className="container flex justify-center flex-wrap px-8 pt-4 pb-24 md:py-16 md:px-12 h-screen">
        <div className="flex flex-col text-center w-full md:w-1/3">
          <span className="font-semibold text-supernova text-xl mb-2 md:text-5xl">
            404
          </span>
          <h1 className="font-extrabold text-white text-4xl leading-none md:text-6xl">
            P&aacute;gina no encontrada.
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
