import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import LandingPage from "./(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
