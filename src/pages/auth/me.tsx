import { useAddress } from "@thirdweb-dev/react";

const Me = () => {
  const address = useAddress();

  return (
    <div>
      <h1>Me</h1>
      <p>{address}</p>
    </div>
  );
};

export default Me;
