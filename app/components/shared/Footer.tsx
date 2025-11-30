import { FaYoutube, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-gray-300 border-t border-white/10"
      style={{
        background: "transparent",
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 0.1px, transparent 1.5px)`,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0",
      }}
    >

      <div className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* LEFT SECTION */}
        <div className="space-y-5 max-w-xl">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg">
              <VscCode />
            </div>
            <span className="text-xl font-semibold">developercard.me</span>
          </div>

          <h2 className="text-xl font-semibold">
            Thanks for visiting DevCard!
          </h2>

          <p className="text-gray-400 leading-relaxed">
            DevCard is an open-source project created to help developers showcase their skills and projects in a visually appealing way. If you found it useful, consider supporting its development and future enhancements.
          </p>

          <p className="text-sm text-gray-500 pt-4">
            ©{new Date().getFullYear()} DevCard. All rights reserved.
          </p>
        </div>

        {/* RIGHT SECTION – SOCIAL BUTTONS */}
        <div className="flex flex-col items-center gap-4">

          <div className="custom-card">

            <span className="custom-card-blob bg-transparent "></span>
            <div className="custom-card-inner  flex flex-col gap-3 w-[300px]">
              <p className="text-gray-200">✨ Special Thanks,</p>
              <hr className="border-white/10" />
              <ul className=" flex flex-col gap-2">
                <li className=" text-sm list-none text-gray-300 ">Simpli Ui</li>
                <li className=" text-sm list-none text-gray-300">NextStep</li>
                <li className=" text-sm list-none text-gray-300">Sonner toastify</li>
                <li className=" text-sm list-none text-gray-300">Chatgpt</li>
              </ul>
            </div>
          </div>
          {/* <div className=" flex gap-4 items-center">
            <i className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-[0_0_25px_-8px_rgba(255,255,255,0.4)]">
            <a href="#" target="_blank" aria-label="YouTube Profile" rel="noopener noreferrer"><FaYoutube size={18} /></a>
            </i>

           
            <i className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-[0_0_25px_-8px_rgba(255,255,255,0.4)]">
            <a href="#" target="_blank" aria-label="Twitter Profile" rel="noopener noreferrer"><FaXTwitter size={18} /></a>
            </i>

            <i className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-[0_0_25px_-8px_rgba(255,255,255,0.4)]">
            <a href="#" target="_blank" aria-label="LinkedIn Profile" rel="noopener noreferrer"><FaLinkedinIn size={18} /></a>
            </i>   
          </div> */}

        </div>
      </div>
    </footer>
  );
}
