import { ReactNode } from "react";
import { Avatar, TextInput } from "@mantine/core";

import { MdOutlineMap, MdSearch } from "react-icons/md";

interface IProps {
  children: ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className="h-full overflow-y-hidden">
      <header className="h-[92px] flex items-center justify-between px-12 py-4">
        <h1>LOGO</h1>

        <TextInput
          icon={<MdOutlineMap />}
          size="md"
          rightSection={
            <button className="bg-black h-full flex justify-center items-center">
              <MdSearch size={24} className="text-white w-[44px]" />
            </button>
          }
          placeholder="Where you need trust?"
          style={{ width: 360 }}
        />

        <Avatar
          src="/profile-image.jpg"
          alt="Profile Avatar"
          radius="xl"
          size="lg"
        />
      </header>

      <main className="h-full px-9 pb-9">{children}</main>
    </div>
  );
}
