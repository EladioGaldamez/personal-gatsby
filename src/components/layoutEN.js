import React from "react"
import EnglishHeader from "./headerEN"
import Footer from "./footer"

const EnglishLayout = ({ children }) => {
  return (
    <>
      <EnglishHeader />

      <main className="pt-24">{children}</main>

      <Footer />
    </>
  )
}

export default EnglishLayout
