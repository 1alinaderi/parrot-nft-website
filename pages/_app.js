import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@/styles/globals.css";
import "@/styles/Home.css";
import "react-toastify/dist/ReactToastify.css";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { ToastContainer, toast } from "react-toastify";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { ContractAbi } from "@/abi/abi";
import { Web3Button, useWeb3Modal } from "@web3modal/react";

export default function App({ Component, pageProps }) {
  const web3 = new Web3(Web3.givenProvider);

  const [address, setaddress] = useState();
  const [total, setTotal] = useState();

  const contractAddress = "0xa63A3889333A71D8614027F8F87fe0618A0e154F";
  const Con = new web3.eth.Contract(ContractAbi, contractAddress);

  const { setDefaultChain } = useWeb3Modal();

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
  const chains = [polygon];
  const projectId = "6a66c41a615675b11ca97ad74aecde2a";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  useEffect(() => {
    setaddress(ethereumClient?.getAccount()?.address);
    setDefaultChain(polygon);
  }, [ethereumClient?.getAccount()?.address]);

  useEffect(() => {
    _totalSuplly();
  }, []);
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Component
          address={address}
          _mint={_mint}
          total={total}
          {...pageProps}
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <ToastContainer />
    </>
  );
}
