import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Logo1 from "./assets/Logo 1.png";
import { faGlobe, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <section>
        <div className="container h-screen flex-auto w-full relative">
          <img
            src={Logo1}
            alt="gamersbed"
            className="w-52 lg:w-64 bg-white
          px-8 py-2 mx-auto my-16 shadow-smInvFixed rounded-lg hover:scale-105 duration-500 border-secondary border-2 z-50 relative"
          />

          <ul className="bg-primary px-4 pt-16 pb-1 mx-auto w-full lg:w-1/2 lg:px-8 lg:pb-2 mt-20 shadow-smFixed rounded-xl relative">
            <li className="absolute -top-12 right-1/2 translate-x-1/2 hover:scale-105 duration-500">
              <a href="https://discord.com/invite/grNykqfn7jz" target="blank">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-6xl p-4 bg-white rounded-lg shadow-smFixed border-2 border-secondary text-[#404EED]"
                />
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="http://www.gamersbedd.com/ "
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-4xl text-blue-500"
                />
                <span className="text-xl font-semibold">Gamersbed Blog</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="https://www.facebook.com/gamersbed"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-4xl text-[#1877f2]"
                />
                <span className="text-xl font-semibold">Facebook</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="https://www.instagram.com/gamersbed_com/"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl text-[#c32aa3]"
                />
                <span className="text-xl font-semibold">Instagram</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="https://saweria.co/Gamersbed"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faSackDollar}
                  className="text-4xl text-yellow-900"
                />
                <span className="text-xl font-semibold ">Saweria</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="https://www.tiktok.com/@gamersbed?lang=en"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-4xl text-back"
                />
                <span className="text-xl font-semibold">TikTok</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href=" https://twitter.com/gamersbed"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-4xl text-[#1da1f2]"
                />
                <span className="text-xl font-semibold">Twitter</span>
              </a>
            </li>
            <li className="my-3 lg:my-6 lg:-mx-3">
              <a
                href="https://www.youtube.com/@gamersbedd"
                className="flex items-center justify-between bg-white shadow-smInvFixed px-8 py-4 rounded-xl hover:shadow-smFixed hover:scale-105 duration-500"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-4xl text-red-500"
                />
                <span className="text-xl font-semibold">Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
