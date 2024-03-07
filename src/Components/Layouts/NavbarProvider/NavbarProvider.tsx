import { Navbar } from "..";

type NavbarProviderPropsT = {
  children: React.ReactNode;
};

export const NavbarProvider = ({ children }: NavbarProviderPropsT) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
