import React from "react"

const Footer = () => (
  <footer className="bg-rock3 p-8">
    <div className="flex justify-center items-center">
      <p className="text-center text-gray-400 font-noto">
        © {new Date().getFullYear()} Jose Galdámez, Building good shit since
        2015.
      </p>
    </div>
  </footer>
)

export default Footer
