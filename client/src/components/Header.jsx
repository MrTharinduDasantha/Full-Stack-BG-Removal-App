import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-15">
        {/* Left Side of Header */}
        <div>
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
                Remove the <br className="max-md:hidden" /><span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Background</span> from <br className="max-md:hidden" />Images Online
            </h1>
            <p className="my-6 text-[15px] text-gray-500">Upload your image and remove the background from it. <br className="max-sm:hidden" />You can also download the image with the background removed.</p>
            <div>
                <input type="file" id="upload1" hidden />
                <label className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:bg-gradient-to-br transition-all duration-700" htmlFor="upload1">
                    <img width={20} src={assets.upload_btn_icon} alt="Upload Button" />
                    <p className="text-white text-sm">Upload Image</p>
                </label>
            </div>
        </div>

        {/* Right Side of Header */}
        <div>
            <img className="w-full max-w-md" src={assets.header_img} alt="Header Image" />
        </div>
    </div>
  )
}

export default Header