import Header from "../comp/header";
import Footer from "../comp/Footer";
// import MainContent from "../comp/MainContent";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Siginup = () => {
  return (
    <>
      <Helmet>
        <title> Siginup</title>
        <meta name="description" content="JAVASCRIPTTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/css">{`
   
 
        
    `}</style>
      </Helmet>
      <Header />
     
      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input required  placeholder=" E-mail : "  type="email" />
          <input required placeholder=" Password : " type="password" />
          <button>Sign up</button>
          <p className="account">
          Already hava an account <Link to="/signin"> Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Siginup;
