
import { ReactNode } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNavbar />
      <main className="flex-grow">{children}</main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Layout;
