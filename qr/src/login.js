import React, { useState, useEffect } from "react";

const LoginPage = ({ web3, contract }) => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestData, setRequestData] = useState({
    email: "",
    password: "",
    uID: "",
  });

  // Fetch the 'uid' from the URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("uid");
    if (uid) {
      setUserId(uid);
    }
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Prepare data object for submission
    setRequestData({
      email: email,
      password: password,
      uID: userId,
    });

    if (web3 && contract) {
      try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.registerUser(email, password).send({ from: accounts[0] });
        console.log("User registered successfully");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }

    setSubmit(true);
    // Log the submission data - in real scenarios, you would likely send this to a backend server
    console.log("Submitting info:", requestData);
  };

  return (
    <div className="form-box">
      <div className="login-container" id="login">
        <div className="top">
          <header>Login</header>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt" />
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Submit" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label>
                <a href="/">Forgot password?</a>
              </label>
            </div>
          </div>
        </form>
      </div>
      {submit && (
        <div className="hello">
          <h2>Info Submitted:</h2>
          <div>
            <h3 className="">Email: {requestData.email}</h3>
            <h3 className="">Password: {requestData.password}</h3>
            <h3 className="">Unique ID: {requestData.uID}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
