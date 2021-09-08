import React, {useEffect} from 'react';
import Banner from '../../components/Banner/Banner';
//import Countfigures from '../../components/Countfigures/Countfigures';
import Allinoneapp from '../../components/Allinoneapp/Allinoneapp';
import Meansforyou from '../../components/Meansforyou/Meansforyou';
import Supportedwallets from '../../components/Supportedwallets/Supportedwallets';
import Investors from '../../components/Investors/Investors';
import Partners from '../../components/Partners/Partners';
import Inthenews from '../../components/Inthenews/Inthenews';
import Mobilefirst from '../../components/Mobilefirst/Mobilefirst';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="home-wrapper">
            <Banner/>
            {/* <Countfigures/> */}
            <Allinoneapp/>
            <Meansforyou/>
            <Supportedwallets/>
            <Investors/>  
            <Partners/> 
            <Inthenews/>
            {/* <Mobilefirst/> */}
        </section>
    );
};

export default Home;