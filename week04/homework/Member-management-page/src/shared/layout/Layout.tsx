import Header from "@/shared/components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen bg-ivory-300">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
