import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
