import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Pineapple from "../components/logos/pineapple"
import { useOnClickOutside } from "../utils"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [bgColor, setBackgroundColor] = useState("bg-tuna")
  const navRef = useRef()

  useOnClickOutside(navRef, () => toggleExpansion(false))

  const listener = e => {
    if (window.pageYOffset > 0) {
      setBackgroundColor("bg-russian")
    } else {
      setBackgroundColor("bg-tuna")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return (
    <nav
      className={`flex items-center justify-between flex-wrap fixed w-full z-50 p-4 md:px-12 ${bgColor} ${
        isExpanded ? "shadow" : ""
      } transition-all duration-200 ease-in-out`}
      ref={navRef}
    >
      <Link className="text-5xl text-white" to="/" title="Main page">
        <span className="hidden">Is this a pineapple? Yes</span>
        <Pineapple className="h-12 md:w-10 md:h-20 animated-logo" />
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-gray-500"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 ${
          isExpanded ? "" : "hidden"
        }`}
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center font-bold">
          <li className="mr-3 py-4 md:py-0 px-2">
            <Link
              className="nav-link text-suit text-sm hover:text-white"
              to="/portfolio"
              activeClassName="active-link"
            >
              Portafolio
            </Link>
          </li>
          <li className="mr-3 py-4 md:py-0 px-2">
            <Link
              className="nav-link text-suit text-sm hover:text-white"
              to="/challenges"
              activeClassName="active-link"
            >
              Retos
            </Link>
          </li>
          {/*<li className="mr-3 py-4 md:py-0 px-2">
            <Link className="nav-link text-suit text-sm hover:text-white" to="/" activeClassName="active-link">Blog</Link>
          </li>*/}
        </ul>
      </div>
    </nav>
  )
}

export default Header
