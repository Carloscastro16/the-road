import Presentacion from "../../Components/Models/Landing/Presentacion";
import Header from "../../Components/Models/Landing/Header";
import OfferSection from "../../Components/Models/Landing/OfferSection";
import AboutUsSection from "../../Components/Models/Landing/AboutUsSection";
import Footer from "../../Components/Models/Landing/Footer";

export default function LandingView(){
    return ( 
        <>
        <Header></Header>
        <Presentacion></Presentacion>
        <OfferSection></OfferSection>
        <AboutUsSection></AboutUsSection>
        <Footer></Footer>
        </>
    )
}