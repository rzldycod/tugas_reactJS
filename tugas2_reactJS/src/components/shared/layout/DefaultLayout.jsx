import Header from "../Header";
import Footer from "../Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container my-5">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
