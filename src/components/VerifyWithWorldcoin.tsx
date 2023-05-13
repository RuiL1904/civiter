import { IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";

const VerifyWithWorldcoin = () => {
  const handleProof = async (result: ISuccessResult) => {
    const reqBody = {
      merkle_root: result.merkle_root,
      nullifier_hash: result.nullifier_hash,
      proof: result.proof,
      credential_type: result.credential_type,
      action: "verify",
      signal: "",
    };

    fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then(async (res: Response) => {
      if (res.status == 200) {
        console.log("Verification successful!");
      } else {
        throw (
          new Error("Verification failed! Error: " + (await res.json()).code) ??
          "Unknown error"
        );
      }
    });
  };

  const onSuccess = (result: ISuccessResult) => {
    // TODO: Frontend redirects, for example
  };

  return (
    <IDKitWidget
      app_id={process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID!}
      action="verify"
      signal=""
      handleVerify={handleProof}
      onSuccess={onSuccess}
    >
      {({ open }) => <button onClick={open}>Verify with World ID</button>}
    </IDKitWidget>
  );
};

export default VerifyWithWorldcoin;
