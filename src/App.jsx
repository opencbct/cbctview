import React, { useState, useEffect } from 'react';
import "./App.css";
import pajamasdog from './assets/pajamasdog.png';
import pajamasblog from './assets/pajamasblog.png';
import cbctview from './assets/cbctview.png';
import Porfile from "./assets/Photo.png";
import Agreement from "./assets/agreement.pdf";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import Project6 from "./assets/project6.png";
import Project7 from "./assets/project7.png";
import Project8 from "./assets/project8.png";
import Project9 from "./assets/project9.png";
import Project10 from "./assets/project10.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  const [openedPopupId, setOpenedPopupId] = useState(null);

  const toggleImage = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    setOpenedPopupId(id);
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">CBCT VIEW</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#project" className="text-gray-400 hover:text-white cursor-pointer">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#promotion" className="text-gray-400 hover:text-white cursor-pointer">
                    Promotion
                  </a>
                </li>
                <li>
                  <a href="#investment" className="text-gray-400 hover:text-white cursor-pointer">
                    Investment
                  </a>
                </li>
                <li>
                  <a href="#aboutus" className="text-gray-400 hover:text-white cursor-pointer">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">This site contains a secret account infomation considering attracting private investors.</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Your avatar gets AI</h2>
              </div>
                <div>
                  <p className="mt-4 text-gray-400">
                  You can't expect any productivity from a web waiting for customers to come. A web that doesn't even monitor your basic calendar has no investment value.<br/>Your avatar gets AI. <br/>Get used to AI helping your business, which is reading your mind correctly but has better intelligence than you! Monitor patients' dental conditions and treatments, and move by itself in search of more patients. Bona finds effective expensives, and manages employee in-and-out. Find new treatments. Addresses vendor care to address all kinds of technical flaws in clinics.
                  <br/>We are creating such an app.
                    계약서를 다운받아 사인한 후 투자금 입금 증빙내역과 함께 이메일보내주시면 계약이 성립됩니다. 입금이 확인되면 이주일 안에 변호사의 공증이 포함된 원본 계약서를 포스트 메일로 받게 됩니다. 본계약서는 계약만료일과 동시에 현금전환이 가능합니다. 계약서안에는 이 모든 투자자의 투자원금과 성공보수를 보장하는 내용이 충분히 담겨있습니다. 
                   </p>
                  <button className="px-8 shadow-gray-500 shadow-md py-2 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href={Agreement} download="InvestmentContract.pdf" className="px-8 shadow-gray-500 shadow-md py-2 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Download an investment contract
                    </a>
                  </button>
                </div>
              </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="project">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-2 gap-10 mt-11">

            {/* 한줄 한개 카드배치 <div className="mt-12"> */}
            {/* 한줄 두개 카드배치 <div className="grid grid-cols-2 gap-10 mt-11"> */}
            {/* 한줄 세개 카드배치 <div className="flex flex-col sm:flex-row gap-10 mt-11"> */}
            {/* 세로줄 조정 flex flex-col, 가로줄 조정 flex sm:flex-row */}

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  NFT Gallery
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Market Size: 100 milions <br/>
                  Development period: 12 months <br/>
                  Sales Amount: $500,000.00 <br/>
                  Number of pages: 200 <br/>
                  Package: Domain, Hosting, Data, Security, Network, and Other. <br/>
                  Maintenance period: 1 year <br/>
                  Management fee: 10% of monthly gross sales amount before Tax 
                </p>
                <div className="flex mt-12 gap-2">

                <div>
                  <button onClick={(event) => toggleImage(projectId, event)} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  {openedPopupId === projectId && (
                    <div className="popup">
                      <button className="close-button" onClick={(event) => toggleImage(null, event)}>X</button> 
                      <div className="image-container">
                        <img className="popup-image" src={pajamasdog} alt="Thumbnail" />
                      </div>
                    </div>
                  )}
                </div>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Auto Part Auction
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Dog Blog & Supplies Store
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Dental X-Ray in Rental Service
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  CBD Store
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project6} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Guide Doc
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Free guide surgery for a implant surgery in Dental. 
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project7} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  The Dental AI Project.
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Website redesign for the Dental AI project. You can't expect any productivity from a web waiting for customers to come. A web that doesn't even monitor your basic calendar has no investment value.
                  Your avatar gets AI. Get used to AI helping your business, which is reading your mind correctly but has better intelligence than you! Monitor patients' dental conditions and treatments, and move by itself in search of more patients. Bona finds effective expensives, and manages employee in-and-out. Find new treatments. Addresses vendor care to address all kinds of technical flaws in clinics.
                  We are creating such an app. 
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Thumbnail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project8} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Venus Robot
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Reincarnates Photo into an Artistic Portrait App.
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">

                  <div>
                    <button onClick={() => toggleImage(true)} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Thumbnail
                    </button>
                    {showImage && (
                      <div className="popup">
                        <button className="close-button" onClick={() => toggleImage(false)}>X</button>
                        <div className="image-container">
                          <img className="popup-image" src={cbctview} alt="Thumbnail" />
                        </div>
                      </div>
                    )}
                  </div>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotion section */}
        <section className="py-10" id="promotion">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Promotion</h2>
            <div className="mt-14">

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project9} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  guidedoc.io
                </h3>
            {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p> */}
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Detail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project10} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  rentalxray.com
                </h3>
            {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p> */}
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Detail
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment section */}
        <section className="py-10" id="investment">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Investment</h2>
            <p className="text-gray-500">Investment fundraising status</p>
                  <p className="text-gray-500">Individual unit price of investment $1,000.00</p>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">NFTZON</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[35%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JUNKZON</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[10%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PAJAMAS DOG</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[20%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">RENTAL X-RAY</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[05%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">REFILL CBD</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[10%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">GUIDE DOC</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CBCT VIEW</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[15%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">VENUS ROBOT</h2>
                  <p className="text-gray-500">$500,000.00</p>
                </div>
                <span className="w-[25%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
            Investment method
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  BITCOIN
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  PICOIN
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  BANK TRASFER
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  CREDIT CARD
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  PAYPAL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us section */}
        <section className="py-8" id="aboutus">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  Start Development<br/>
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Start Importing Dental Chairs<br/>
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                  Registrated FDA<br/>
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p>
                  Startups<br/>
                  and started to learn Frontend Development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ OPENCBCT LLC 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
