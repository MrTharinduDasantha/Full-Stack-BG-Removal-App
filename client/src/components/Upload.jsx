import { assets } from "../assets/assets"

const Upload = () => {
  return (
    <div className="pb-16">
        {/* Title */}
        <h1 className="mb-4 sm:mb-6 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 md:py-16">See the Magic. Try Now!</h1>
        <div className="text-center mb-20">
            <input type="file" id="upload2" hidden />
            <label className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:bg-gradient-to-br transition-all duration-700" htmlFor="upload2">
                <img width={20} src={assets.upload_btn_icon} alt="Upload Button" />
                <p className="text-white text-sm">Upload Image</p>
            </label>
        </div>
    </div>
  )
}

export default Upload