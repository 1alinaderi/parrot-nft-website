import Head from "next/head";
import React from "react";

const PrrotDetails = (props) => {
  const { data } = props;

  return (
    <div style={{ minHeight: "100vh" }} className="bg-black w-100  p-0 m-0 ">
      <Head>
        <title>World Parrots || Gallery</title>
        <meta name="description" content="Generated by World Parrots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo 1!.png" />
      </Head>
      <div className="w-100 p-0 px-4 px-  container-lg">
        <div className="w-100 p-0 m-0">
          <img
            style={{ height: "200px", objectFit: "cover" }}
            src={"/banner1.JPEG"}
            className="w-100"
          />
        </div>
        <div className="py-4 w-100 p-0 m-0 row text-white">
          <div className="w-100 p-0 m-0 fs-4">
            <a href="/gallery">Home Gallery</a> / <a>{data.name}</a>
          </div>
          <div className="col-md-5 p-0 m-0 mt-5 px-md-4 px-1">
            <img src={data?.image} className="w-100 rounded " />
          </div>
          <div className="col-md-7  p-0 m-0 mt-5 px-md-4 px-1 ">
            <div className="w-100 p-0 m-0 bg-dark row py-3 px-4 rounded">
              {data?.attributes?.map((e) => {
                const regex = /#([A-Fa-f0-9]{6})/;
                const regex2 = /\s*\([^)]*\)/;
                const colorCode = regex.exec(e.value);
                return (
                  <div className="w-100 p-0 m-0 d-flex">
                    <span className="col-6 p-0 m-0 mt-1 fw-bold fs-6">
                      {e.trait_type}:
                    </span>
                    <span className="col-6 p-0 m-0 mt-1 fs-6 text-white-50 d-flex">
                      {colorCode ? e.value.replace(regex2, "") : e.value}{" "}
                      {colorCode ? (
                        <span
                          className="ms-2 mt-1 d-flex"
                          style={{
                            width: "20px",
                            height: "20px",
                            background: colorCode[0],
                          }}
                        ></span>
                      ) : null}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PrrotDetails;
export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://ipfs.io/ipfs/QmdQ9DuVzwNBH44jP6BCbrKFoPEjmXogDxndrcevCBdWop/${params?.parrot}.json`
  );

  if (res.status === 200) {
    const data = await res.json();
    return { props: { data } };
  } else {
    return {
      notFound: true,
    };
  }
}
