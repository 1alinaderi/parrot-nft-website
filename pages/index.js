import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FaAlignJustify,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaStar,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbBinaryTree } from "react-icons/tb";
import { parrotInformation } from "@/constant/parrot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Head>
        <title>World Parrots</title>
        <meta name="description" content="Generated by World Parrots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo 1!.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo 1!.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo 1!.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo 1!.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/Logo 1!.png" />
      </Head>
      <main className={`${inter.className}`}>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header
            className="justify-content-end"
            closeButton
          ></Offcanvas.Header>
          <Offcanvas.Body className="bg-black">
            <div className="d-flex flex-column ">
              <a href="/" className="mx-1 px-3 p-2 fw-bold text-white">
                HOME
              </a>

              <a href="/#roadmap" className="mx-1 p-2 px-3 fw-bold text-white ">
                ROADMAP
              </a>
              <a href="/mint" className="mx-1 p-2 px-3 fw-bold text-white ">
                MINT
              </a>
              <a href="/gallery" className="mx-1 p-2 px-3 fw-bold text-white ">
                GALLERY
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <header className="w-100 p-2 px-4 px-md-5 py-3 container-lg">
          <div className="w-100 row m-0 p-0">
            <div className="col-6">
              <img src="/Logo.png" style={{ width: "170px" }} />
            </div>
            <div className="col-6 p-0 m-0 d-md-flex d-none justify-content-end align-items-center">
              <a
                href="/"
                className="mx-1 px-3 text-white my-bg-blue p-2 fw-bold"
              >
                HOME
              </a>
              <a
                href="/#roadmap"
                className="mx-1 p-2 px-3 fw-bold my-hover-blue"
              >
                ROADMAP
              </a>
              <a href="/mint" className="mx-1 p-2 px-3 fw-bold my-hover-blue">
                MINT
              </a>
              <a
                href="/gallery"
                className="mx-1 p-2 px-3 fw-bold my-hover-blue"
              >
                GALLERY
              </a>
            </div>
            <div className="d-flex d-md-none col-6 p-0 m-0 justify-content-end align-items-center fs-1">
              <FaAlignJustify onClick={handleShow} />
            </div>
          </div>
        </header>
        <section className="w-100 p-3 px-3 px-md-5 container-lg pb-0">
          <div className="row align-items-center m-0 px-1 px-md-5">
            <div className="col-md-4 py-3 py-md-3 px-0">
              <img className="w-100" src="/Bnr.png" />
            </div>
            <div className="col-md-8 p-0 m-0 ps-md-5">
              <div className="w-100 text_box p-3  text-shadow">
                World parrots collection includes of the 10,000 parrot with 9
                categories of properties various that determine the rarity and
                beauty of that parrot.
              </div>
              <div className="w-100 d-flex row justify-content-md-end justify-content-center align-items-center p-0 m-0 pt-4">
                <a
                  style={{ width: "fit-content" }}
                  className="fs-4 pe-4"
                  href="https://discord.gg/pA4EeHsj94"
                >
                  <span
                    className="px-2 pb-1 rounded fs-3 me-2"
                    style={{ backgroundColor: "#5C6BC0" }}
                  >
                    {" "}
                    <FaDiscord color="#fff" />
                  </span>{" "}
                  Join The Discord
                </a>
                <a
                  className="blue_btn p-2 px-4 mt-4 mt-md-0"
                  href="https://opensea.io/collection/world-parrots"
                >
                  Buy Parrot
                </a>
              </div>
            </div>
          </div>
          <div className="px-2 px-md-5 mt-5 p-0 m-0">
            <div className="w-100 p-0 m-0 rounded container_slider d-flex">
              {parrotInformation.slice(1, 30).map((e) => {
                return <img className="container_img pe-1" src={e.src} />;
              })}
            </div>
          </div>
          <div className="w-100 p-0 m-0 px-3 px-md-5 mt-5">
            <h2 className="display-5 fw-bold">What are world parrots?</h2>
            <p
              style={{ borderBottom: "5px dotted #fff" }}
              className="pt-3 pb-4 fs-5 "
            >
              Pixel art NFTs from world parrots collection that is produced from
              10.000 NFTs. World parrots with more than 500 features included:
              Background, Beak, Color Body, Color Face, Eye, Head, Neck, Perch
              and Wing items have been built. Each parrot is a unique and
              non-fungible token (NFT) token that has been executed in the
              polygon blockchain.
            </p>
          </div>
          <div className="w-100 p-0 m-0 px-3 px-md-5 mt-4">
            <div className="w-100 p-0 m-0 d-flex">
              <Swiper
                loop
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={15}
              >
                <SwiperSlide>
                  {" "}
                  <img
                    style={{ borderRadius: "20px" }}
                    className="w-100"
                    src="/3/1.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    style={{ borderRadius: "20px" }}
                    className="w-100"
                    src="/3/2.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    style={{ borderRadius: "20px" }}
                    className="w-100"
                    src="/3/3.png"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <h2 className="mt-5 fs-3 text-center fw-bold">
              You can view the World Parrots collection on :
            </h2>
            <div className="d-flex w-100 mt-2 justify-content-center row">
              <a
                className="gradiant_btn mx-4 mt-3"
                href="https://opensea.io/collection/world-parrots"
              >
                OPENSEA
              </a>
              <a
                className="gradiant_btn mx-4   mt-3"
                href="https://rarible.com/world-parrots/items"
              >
                RARIBLE
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center p-0 m-0 mt-4 pb-1 pe- ">
              <a
                href="https://discord.gg/pA4EeHsj94"
                className=" mx-1 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#5C6BC0" }}
              >
                <FaDiscord />
              </a>
              <a
                href="https://instagram.com/worldparrotsnft"
                className=" mx-2 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#C536A4" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/worldparrotsnft"
                className=" mx-1 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#55acee" }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
        <section className="w-100 p-3 px-3 px-md-5 container-lg">
          <div className="w-100 p-0 m-0 py-3 px-md-5 px-3">
            <div
              style={{
                borderBottom: "5px dotted #fff",
                borderTop: "5px dotted #fff",
              }}
              className=" py-5 w-100 p-0 m-0 d-flex row "
            >
              <div className="col-md-6 p-0 m-0">
                <h2 className="fs-2 fw-bold mb-4">
                  <TbBinaryTree className="me-3" />
                  Rarity Rankings
                </h2>
                <p className="fs-5">
                  Each parrot is truly unique and rare because no two NFTs are
                  the same, but some of them are rarer than others. The parrot
                  ranking on the World Parrots gallery page will be available to
                  you.
                </p>
                <div className="w-100 pt-5 d-flex justify-content-center">
                  <a href="/gallery" className="blue_btn p-2 px-4">
                    GALLERY
                  </a>
                </div>
              </div>
              <div className="col-md-6 p-0 m-0 ">
                <img
                  src="/Parrot Details.png"
                  className="w-100 px-md-5 py-md-4 mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-100 p-3 px-3 px-md-5 container-lg">
          <div className="w-100 p-0 m-0 px-md-5 px-3">
            <div id="roadmap" className=" py-4 w-100 p-0 m-0 d-flex row ">
              <h1 className="p-0 m-0 display-4 fw-bold text-center">
                World Parrots roadmap
              </h1>
              <p className="p-0 m-0 pt-4 fs-5">
                These goals and phases mentioned are of the overall goals of the
                world parrots collection , all of which will be completed and
                available in 2025.
                <br />
                The goals and phases will first be raised and announced in the
                world parrots membership club and will be published after the
                approval of the shareholders.
              </p>
              <div className="py-4 w-100 p-0 m-0">
                <div
                  style={{
                    borderRadius: "50px",
                    boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.4)",
                  }}
                  className="road_map_box border-2 w-100 p-0 m-0 p-4 d-flex align-items-center border border-dark mt-3"
                >
                  <span>
                    <FaMapMarkerAlt
                      color="#e2b600"
                      className="me-4"
                      size={54}
                    />
                  </span>
                  <span className="fw-bold fs-3 font-small-phone">
                    10.000 unique world parrots are started their life in
                    blockchain polygon.
                  </span>
                </div>
                <div
                  style={{
                    borderRadius: "50px",
                    boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.4)",
                  }}
                  className="road_map_box border-2 w-100 p-0 m-0 p-4 d-flex align-items-center border border-dark mt-3"
                >
                  <span>
                    <FaMapMarkerAlt
                      color="#e2b600"
                      className="me-4"
                      size={54}
                    />
                  </span>
                  <span className="fw-bold fs-3 font-small-phone">
                    Setting up a world parrots membership association and club
                    to achieve goals and hold events.
                  </span>
                </div>
                <div
                  style={{
                    borderRadius: "50px",
                    boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.4)",
                  }}
                  className="road_map_box border-2 w-100 p-0 m-0 p-4 d-flex align-items-center border border-dark mt-3"
                >
                  <span>
                    <FaMapMarkerAlt
                      color="#e2b600"
                      className="me-4"
                      size={54}
                    />
                  </span>
                  <span className="fw-bold fs-3 font-small-phone">
                    Physical partnership with strategic brands to develop and
                    expand world parrots digital brand goals.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-100 p-0 m-0 px-md-5 d-flex justify-content-center">
          <img src="/Footer.png" className="col-md-9 col-10" />
        </div>
        <div
          style={{ backgroundColor: "#24b4b2" }}
          className="w-100 py-4 "
        ></div>

        <footer className="w-100 p-0 m-0 ">
          <div
            style={{ backgroundColor: "#333" }}
            className="w-100 p-0 m-0 p-3"
          >
            <div className="d-flex justify-content-center align-items-center p-0 m-0 mt-4 pb-4">
              <a
                href="https://discord.gg/pA4EeHsj94"
                className=" mx-2 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#5C6BC0" }}
              >
                <FaDiscord />
              </a>
              <a
                href="https://instagram.com/worldparrotsnft"
                className=" mx-2 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#C536A4" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/worldparrotsnft"
                className=" mx-2 text-white pb-1 px-2 fs-3 rounded-circle"
                style={{ backgroundColor: "#55acee" }}
              >
                <FaTwitter />
              </a>
            </div>
            <div className="w-100 d-flex justify-content-center pt-2 text-white fs-5">
              ©2022 BY :{" "}
              <a className="ps-2" href="mailto:malinaderi6@gmail.com">
                {" "}
                malinaderi6@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
