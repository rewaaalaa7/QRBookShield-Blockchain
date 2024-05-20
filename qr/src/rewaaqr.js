import React from "react";
import QRCode from "qrcode.react";

const Rewaaqr = ({ web3, contract }) => {
  const uniqueId = "12345";
  const localIp = "10.10.221.213"; 
  const loginUrl = `http://${localIp}:3000/login?uid=${uniqueId}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <QRCode value={loginUrl} size={256} />
      <h1 style={{ color: "white" }}>Scan this QR Code to Login</h1>
      {web3 && contract ? (
        <p style={{ color: "white" }}>Web3 and Contract are initialized</p>
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      )}
    </div>
  );
};

export default Rewaaqr;
