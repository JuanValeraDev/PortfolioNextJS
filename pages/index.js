import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";
import HomeSidebar from "../components/pages/home-sidebar";

const index = () => {
  return (
    <>
      <EdinaPreview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
