import VerifyWithWorldcoin from "@/components/VerifyWithWorldcoin";
import { ConnectWallet } from "@thirdweb-dev/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <VerifyWithWorldcoin />
      <ConnectWallet btnTitle="Connect Wallet" />
    </main>
  );
}
