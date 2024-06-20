import React, { useState } from "react";
import { token_local_new_backend as token } from "../../../declarations/token-local-new-backend";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Claim Now");

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free DKAR tokens here! Claim 10,000 KAR tokens to 2vxsx-fae
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
