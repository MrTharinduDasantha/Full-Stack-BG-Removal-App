import { assets } from "../assets/assets"

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">Steps to Remove <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Background</span></h1>
        
        <div className="flex items-start flex-wrap gap-8 mt-16 xl:mt-20 justify-center">
            <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 rounded hover:shadow-xl transition duration-500">
                <img className="max-w-9" src={assets.upload_icon} alt="Upload Icon" />
                <p className="text-xl font-medium">Upload Image</p>
            </div>
            <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 rounded hover:shadow-xl transition duration-500">
                <img className="max-w-9" src={assets.remove_bg_icon} alt="Remove Background Icon" />
                <p className="text-xl font-medium">Remove Background</p>
            </div>
            <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 rounded hover:shadow-xl transition duration-500">
                <img className="max-w-9" src={assets.download_icon} alt="Download Icon" />
                <p className="text-xl font-medium">Download Image</p>
            </div>            
        </div>
    </div>
  )
}

export default Steps