import { useClerk, UserButton, useUser } from "@clerk/clerk-react"
import { assets } from "../assets/assets"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()
  const { credit, loadCreditsData } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData()
    }
  }, [isSignedIn])
  return (
    <div className="flex items-center justify-between mx-4 py-9 lg:mx-44">
        <Link to="/"><img className="w-32 sm:w-44" src={assets.logo} alt="Logo" /></Link>
        {
          isSignedIn 
          ? <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={() => navigate("/buy")} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:bg-blue-200 transition-all duration-300">
                <img className="w-5" src={assets.credit_icon} alt="Credit Icon" />
                <p className="text-xs sm:text-sm font-medium text-gray-600">Credits : {credit}</p>
              </button>
              <p className="text-gray-600 max-sm:hidden">Hello ! {user.fullName}</p>
              <UserButton />
            </div>
          : <button onClick={() => openSignIn({})} className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 rounded-full">
              Get Started <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="Arrow Icon" />
            </button>
        }
    </div>
  )
}

export default Navbar