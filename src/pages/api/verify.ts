import type { NextApiRequest, NextApiResponse } from "next";

export type Reply = {
  code: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>
) {
  const reqBody = {
    merkle_root: req.body.merkle_root,
    nullifier_hash: req.body.nullifier_hash,
    proof: req.body.proof,
    credential_type: req.body.credential_type,
    action: req.body.action,
    signal: req.body.signal,
  };

  fetch(
    `https://developer.worldcoin.org/api/v1/verify/${process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  ).then(async (verifyRes) => {
    const worldResponse = await verifyRes.json();

    if (worldResponse.success) {
      res.status(200).send({ code: worldResponse.code });

      // TODO: Save code to "database" or set user as verified
    } else {
      res.status(400).send({ code: worldResponse.code });
    }
  });
}
