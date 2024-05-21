import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default DefaultLayout;