import { FC, ReactNode } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="w-full min-h-[100vh] !px-0 !py-5 md:ml-4 overflow-y-auto overflow-x-hidden z-1 transition-transform duration-300 ease-in-out">
    {children}
  </div>
);

export default Content;


