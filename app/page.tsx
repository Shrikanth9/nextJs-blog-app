import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperites from "@/components/HomeProperties";
import connectDB from "@/config/database";
const Homepage= () => {
    return ( 
        <>
          <Hero />
          <InfoBoxes />
          <HomeProperites />
        </>
    );
}
 
export default Homepage;