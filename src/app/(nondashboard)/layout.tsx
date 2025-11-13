import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import { FC } from "react";
import Footer from "@/components/Footer";

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
