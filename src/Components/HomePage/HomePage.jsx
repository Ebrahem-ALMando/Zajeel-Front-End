import NavBar from "../Header/NavBar";
import BannerHome from "./Body/BannerHome";
import Organizational from "./Body/Organizational";
import Grow from "./Body/Grow";
import Services from "./Body/Services";
import Approach from "./Body/Approach";
import Clients from "./Body/Clients";

const HomePage=()=>{
    return(
        <>
            <BannerHome/>
            <Organizational/>
            <Grow/>
            <Services/>
            <Approach/>
            <Clients/>
        </>
    )
}
export default HomePage;