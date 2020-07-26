import React from "react"
import { FiHexagon, FiCircle, FiSquare, FiTriangle, FiActivity, FiStar } from "react-icons/fi"
import { GoZap } from "react-icons/go"

const RandomIcons = () => {
  return <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
    <FiHexagon className="absolute w-16 h-16 text-russian opacity-50 animate-float-y-reverse" style={{ top: "20%", left: "60%" }} />
    <FiCircle className="absolute w-16 h-16 text-russian opacity-50 animate-float-x-reverse" style={{ top: "68%", left: "8%" }} />
    <FiSquare className="absolute w-20 h-20 text-russian opacity-50 animate-float-x" style={{ top: "50%", left: "50%" }} />
    <FiSquare className="absolute w-10 h-10 text-russian opacity-50 transform rotate-45 animate-float-y" style={{ top: "40%", left: "80%" }} />
    <FiTriangle className="absolute w-20 h-20 text-russian opacity-50 transform rotate-90 animate-float-x-reverse" style={{ top: "1%", left: "30%" }} />
    <FiTriangle className="absolute w-12 h-12 text-russian opacity-50 animate-float-y-reverse" style={{ top: "80%", left: "91%" }} />
    <FiActivity className="absolute w-8 h-8 text-russian opacity-50 animate-float-x-reverse" style={{ top: "5%", left: "91%" }} />
    <FiStar className="absolute w-8 h-8 text-russian opacity-50 animate-float-y" style={{ top: "75%", left: "30%" }} />
    <GoZap className="absolute w-12 h-12 text-russian opacity-50 animate-float-y-reverse" style={{ top: "30%", left: "20%" }} />
  </div>
}

export default RandomIcons