import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@/styles/globals.css";
import "@/styles/Home.css";
import 'react-toastify/dist/ReactToastify.css';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { ToastContainer, toast } from 'react-toastify';
import Web3 from "web3";


export default function App({ Component, pageProps }) {

  const web3 = new Web3(Web3.givenProvider);

  console.log(Web3.givenProvider)

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
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Component  {...pageProps} ethereumClient={ethereumClient} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <ToastContainer/>
    </>
  );
}
