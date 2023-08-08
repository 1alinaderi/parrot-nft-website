import Web3 from "web3";
import { parrotInformation } from "@/constant/parrot";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import { polygon } from "wagmi/chains";
import { ToastContainer, toast } from "react-toastify";
import { ContractAbi } from "@/abi/abi";

const mint = (props) => {
  const { ethereumClient } = props;

  const [address, setaddress] = useState();
  const [total, setTotal] = useState();

  const web3 = new Web3(Web3.givenProvider);

  const contractAddress = "0xa63A3889333A71D8614027F8F87fe0618A0e154F";
  const Con = new web3.eth.Contract(ContractAbi, contractAddress);

  const { setDefaultChain } = useWeb3Modal();

  useEffect(() => {
    setaddress(ethereumClient?.getAccount()?.address);
    setDefaultChain(polygon);
  }, [ethereumClient?.getAccount()?.address]);

  useEffect(() => {
    _totalSuplly();
  }, []);


  async function _totalSuplly() {
    await Con.methods
      .totalSupply()
      .call()
      .then((e) => {
        console.log(e);
        setTotal(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function _mint() {
    const gasPrice = await web3.eth.getGasPrice();
    const gas = await Con.methods
      .mint(address, 1)
      .estimateGas({ from: address });
    await Con.methods
      .mint(address, 1)
      .send({
        from: address,
        gasPrice: gasPrice,
        gas: gas,
      })
      .then(() => {
        toast.success("you mint 1 parrot", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }

  return (
    <div className="w-100 p-0 m-0 bg-black" style={{ minHeight: "100vh" }}>
      <Head>
        <title>World Parrots || Gallery</title>
        <meta name="description" content="Generated by World Parrots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-100 p-0 px-4 px-  container-lg">
        <div className="w-100 p-0 m-0">
          <img
            style={{ height: "200px", objectFit: "cover" }}
            src="https://cheetez.net/gallery/img/Header.png"
            className="w-100"
          />
        </div>
        <div className="row w-100 p-0 m-0 py-4   px-4 text-white">
          <h1 className="w-100 p-0 m-0 text-center display-4 fw-bold pb-4">
            MINT NOW!
          </h1>
          <div className="col-md-6 p-0 m-0  py-4">
            <div className="row justify-content-center align-items-center w-100 p-0 m-0">
              <span style={{ width: "fit-content" }}>
                <Web3Button />
              </span>
              <span className="mt-4 fs-4 text-center py-3">
                {total
                  ? `Minted : ${total} / 10000`
                  : "Loading..."}
              </span>
              <div className="w-100 d-flex align-items-center justify-content-center mt-4 ">
                <button
                  onClick={() => {
                    if (!address) {
                      toast.warning("Connect Wallet First!", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    } else {
                      _mint();
                    }
                  }}
                  className="btn btn-primary p-3  col-sm-6 col-8 fs-4"
                >
                  Mint Now!
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0">
            <div className="w-100 p-0 m-0 rounded container_slider my-4 d-flex">
              {parrotInformation.slice(1, 30).map((e) => {
                return <img className="container_img pe-1" src={e.src} />;
              })}
            </div>
            <div className="w-100 p-0 m-0 rounded container_slider my-4 d-flex">
              {parrotInformation
                .reverse()
                .slice(5, 30)
                .map((e) => {
                  return <img className="container_img pe-1" src={e.src} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mint;
