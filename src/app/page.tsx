"use client"

import { CiClock2 } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { TiLocationArrow } from "react-icons/ti";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const articles = [
    {
      id: 1,
      category: 'Travel',
      title: 'Article title',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2 min ago',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Article title',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2 min ago',
    },
  ];

  const trending = [
    {
      id: 1,
      title: 'Dolore magna aliqua',
      image: 'https://i.pinimg.com/736x/b4/b1/ac/b4b1ac42adc5ac5a3110b876fe6b7ffb.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2m ago',
    },
    {
      id: 2,
      title: 'Morbi eleifend a libero',
      image: 'https://i.pinimg.com/736x/6f/7e/ff/6f7eff9d0f6cca44eb15630c8629d9b4.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '1h ago',
    },
    {
      id: 3,
      title: 'Morbi eleifend a libero',
      image: 'https://i.pinimg.com/736x/16/68/37/1668377660cf43c380d15d64d0ebcf05.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2h ago',
    },
  ];


  const smallArticles = [
    {
      id: 1,
      title: 'Small title',
      image: 'https://i.pinimg.com/736x/b9/72/73/b97273f3afd712aa5014c3c433ce97a1.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '3h ago',
      category: 'Worldnews'
    },
    {
      id: 2,
      title: 'Small title',
      image: 'https://i.pinimg.com/736x/38/a0/d3/38a0d34d103f417d3836d4faa2e2aa4e.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '4h ago',
      category: 'Days'
    },
    {
      id: 3,
      title: 'Small title',
      image: 'https://i.pinimg.com/736x/7b/99/62/7b996255ceeaa11f9e7a8707f7222b45.jpg',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '3h ago',
      category: 'Monica'
    },
  ];


  const largeArticle = [
    {
      id: 1,
      category: "CITY",
      image: "https://i.pinimg.com/736x/c1/64/81/c1648108c06539c23e680dafe72a0468.jpg",
      title: 'Large article title',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde id, quo, aspernatur voluptatibus inventore perspiciatis corporis, veritatis doloremque et.',
      time: '2m ago',
    },
    {
      id: 2,
      category: "TRAVEL",
      image: "https://i.pinimg.com/736x/9d/9a/e6/9d9ae6975b7a7d64dad347f698960f83.jpg",
      title: 'Large article title',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde id, quo, aspernatur voluptatibus inventore perspiciatis corporis, veritatis doloremque et.',
      time: '2m ago',
    },
  ]

  const pathName = usePathname();

  const menus = [
    {
      id: 1,
      title: "Home",
      route: '/'
    },
    {
      id: 2,
      title: "Discovery",
      route: '#'
    },
    {
      id: 3,
      title: "Photos",
      route: '#'
    },
    {
      id: 4,
      title: "Contact",
      route: '#'
    },
    {
      id: 5,
      title: "Track",
      route: '/track'
    },
  ]



  return (
    <div className="bg-gray-100 min-w-[400px]">
      {/* Header */}
      <header className="bg-gray-200 p-4 max-[400px]:flex-col flex justify-between items-center">
        <div className="text-xl font-bold text-red-400">LOGO</div>
        <div className="flex items-center gap-4">
          <nav className="space-x-4">

            {
              menus.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.route}
                  className={`text-gray-700 hover:text-gray-900 ${pathName === menu.route ? 'text-red-400 font-bold' : ''
                    }`}
                >
                  {menu.title}
                </Link>))
            }
          </nav>
          <img
            src="https://i.pinimg.com/736x/98/19/f3/9819f3a65f5b30caa531f01dd9f334eb.jpg"
            alt="Hero"
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex bg-white flex-wrap">
        <div className="md:w-full lg:w-[70%] relative">
          <img
            src="https://i.pinimg.com/736x/ca/50/35/ca5035f7fe2f9be8ca35712bb0e0ab08.jpg"
            alt="Hero"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4">
            <div className="w-[70%] flex-col justify-start items-start text-start">
              <h1 className="text-3xl font-bold mb-2">WORLD NEWS</h1>
              <div className="border-b-2 border-gray-200 my-4"></div>
              <p className="text-lg font-semibold">Amazing places in America to visit.</p>
              <p>For some reason - this country, this city, this neighborhood, this particular street - is the place you are living a majority of your life in.</p>
              <button className="mt-4 bg-red-400 hover:bg-red-500 text-white px-10 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] md:w-full justify-center flex items-center">

          <div className=" mx-auto px-4 max-lg:py-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">MORE NEWS</h2>
              <div className="flex gap-8">

                <FaAngleLeft className="text-gray-500 hover:text-black" />
                <FaAngleRight className="text-gray-500 hover:text-black" />
              </div>
            </div>
            <div className="border border-gray-200 my-4"></div>
            <div className="grid gap-6">
              {articles.map((article) => (
                <div key={article.id} className="p-4 rounded-lg ">
                  <p className="text-pink-600 text-sm font-semibold uppercase">{article.category}</p>
                  <h3 className="text-lg font-bold mt-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{article.description}</p>
                  <div className="flex items-center text-gray-400 text-xs mt-2">
                    <CiClock2 />
                    <span className="material-icons text-sm mr-1 ml-2">schedule</span>
                    {article.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Trending Section */}
      <section className="sm:px-[100px] px-10 pt-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-10">TRENDING</h2>
          <div className="flex gap-8">

            <FaAngleLeft className="text-gray-500 hover:text-black" />
            <FaAngleRight className="text-gray-500 hover:text-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trending.map((trending) => (
            <div
              key={trending.id}
              className="bg-white rounded hover:shadow-lg transition "
            >
              <img
                src={trending.image}
                alt="Trending"
                className=" rounded-t mb-4"
              />
              <div className="pb-6 py-2 px-10">
                <h3 className="text-lg font-bold mb-2">{trending.title}</h3>
                <p className="text-gray-600">{trending.description}</p>
                <div className="flex items-center text-gray-400 text-xs mt-2">
                  <CiClock2 />
                  <span className="material-icons text-sm mr-1 ml-2">{trending.time}</span>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Happening Now Section */}
      <section className="sm:px-[100px] px-10 py-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-10">HAPPENING NOW</h2>
          <div className="flex gap-8">

            <FaAngleLeft className="text-gray-500 hover:text-black" />
            <FaAngleRight className="text-gray-500 hover:text-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Articles */}
          <div className="md:col-span-2">

            {
              largeArticle.map((largeArticle) => (
                <div key={largeArticle.id} className="w-full mb-6 relative">
                  <img
                    src={largeArticle.image}
                    alt="Hero"
                    className="w-full h-[350px] object-cover rounded"
                  />
                  <h2 className="absolute top-0 pt-8 pl-8 text-white font-semibold opacity-80">
                    {largeArticle.category}
                  </h2>
                  <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-4">
                    <div className="w-full flex-col justify-start items-start text-start">
                      <div className="pb-6 py-2 px-4">
                        <h3 className="text-lg  text-white font-bold mb-2">{largeArticle.title}</h3>
                        <p className="text-gray-200">{largeArticle.description}</p>
                        <div className="flex items-center text-gray-400 text-xs mt-2">
                          <CiClock2 />
                          <span className="material-icons text-gray-400 text-sm mr-1 ml-2">{largeArticle.time}</span>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

          {/* Small Articles */}
          <div className="space-y-4">
            {smallArticles.map((smallArticle) => (
              <div
                key={smallArticle.id}
                className="bg-transparent transition "
              >
                <img
                  src={smallArticle.image}
                  alt="smallArticle"
                  className=" h-[150px] w-full rounded mb-4"
                />
                <div className="pb-2">
                  <h3 className="text-lg font-bold mb-2">{smallArticle.title}</h3>
                  <div className="flex items-center text-gray-400 text-xs">
                    <CiClock2 />
                    <span className="material-icons text-sm mr-1 ml-2">{smallArticle.time} by <a href="#" className=" italic underline">{smallArticle.category}</a></span>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white sm:px-[100px] px-10 py-10 justify-start items-start flex w-full">
        <div className="flex max-md:flex-col gap-10 flex-wrap justify-between lg:justify-around w-full">
          <div className="flex max-md:flex-col flex-wrap justify-between gap-4 mb-2">
            <h3 className="font-bold mb-2">Logo</h3>
            <div className="flex flex-col">
              <a href="#" className="text-gray-500">Home</a>
              <a href="#" className="text-gray-500">Discovery</a>
              <a href="#" className="text-gray-500">Photos</a>
              <a href="#" className="text-gray-500">Contace</a>

            </div>
            <div className="flex flex-col">
              <a href="#" className="text-gray-500">About</a>
              <a href="#" className="text-gray-500">Help</a>
              <a href="#" className="text-gray-500">Terms</a>
              <a href="#" className="text-gray-500">Guidlines</a>

            </div>
            <div className="flex flex-col">
              <a href="#" className="text-gray-500">Testimonials</a>
              <a href="#" className="text-gray-500">Advertise</a>
              <a href="#" className="text-gray-500">Integrations</a>
              <a href="#" className="text-gray-500">Careers</a>

            </div>
          </div>

          <div>
            <div className="flex items-center border border-gray-500 rounded-lg p-2 focus-within:ring focus-within:ring-blue-500">

              <input
                type="email"
                placeholder="Enter your email"
                className="ml-2 outline-none bg-transparent flex-1 focus:border-none"
              />
              <TiLocationArrow className="text-gray-500" />
            </div>
            <p className="text-sm text-gray-500">Stay in touch with us for the freshest products!</p>
          </div>
          <div>

            <div className="flex space-x-2 text-gray-500">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
              <BiWorld />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
