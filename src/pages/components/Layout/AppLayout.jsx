import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footer";
import { Headers } from "../UI/Headers";
import { GoToTop } from "../UI/GoToTop";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <GoToTop />
      <Footers />
    </>
  );
};
