import React, { useEffect, useState, Fragment } from 'react'
// import HomeInfo from './HomeInfo';
import { Col, Card, Row } from 'antd';
// import workflow from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/finpin-workflow.png";
// import historyimage from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/finpin-history.png";
// import img1 from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/main_1.png";
// import img2 from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/main_2.png";
// import img3 from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/main_3.png";
// import img4 from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/main_4.png";
// import esgratingpg from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/esgratingpg.png";
// import report from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/report-half.png";

import workflow from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/finpin-workflow.png";
import historyimage from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/finpin-history.png";
import img1 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_1.png";
import img2 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_2.png";
import img3 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_3.png";
import img4 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_4.png";
import esgratingpg from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/esgratingpg.png";
import report from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/report-half.png";

// import { Link } from 'react-outer-dom';

function HomePage() {
    const [state, setstate] = useState()

    function OurValues() {
        return (
            <>
                <div>
                    {/* <span>Empowering Sustainable Financial Decision through Technology</span>
                    <br/>
                    <br/> */}
                    <br/>
                    <br/>
                    <span style={{ fontSize: '24px', color: '#736853' }}><b>FIN & PIN LAB</b></span>
                    {/* style={{ fontSize: '30px' }} */}
                    <br/>
                    <span style={{color: '#736853'}}>The most convenient, reliable, and sustainable investment decision-maker</span>
                </div>
            </>
        )
    }

    function OurProductsImage() {
        return (
            <div>
                {/* <img src="https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg" 
                // style= {{float: 'left', width: 400, height: 300, display:'inline-flex', alignItems: 'center'}}
                style = {{width: 400, height: 300 }} 
                alt="nature-img"></img> */}
                <img src={img1}
                    className="main_1"
                    style = {{width: '100%', margin: 'auto', display: 'block'}}
                //     style= {{ margin: '0 auto', textAlign: 'center', float:'center', height: 510, width: 1100, left: 550
                // }} 
                    alt="main_1"></img>            
            </div>
        )
    }

    function OurProducts() {
        return (
            // <div style={{ float: 'left', marginRight: 500}}>
            // <div style={{paddingLeft: 50}}>
            <div>
                 {/* width: 300, display: 'inline', whiteSpace: 'nowrap' */}
                {/* <h2 style={{whiteSpace: 'nowrap'}}><b>OUR VALUES</b></h2> */}
                <br/>
                <br/>
                <h2 style={{whiteSpace: 'nowrap'}}><b>OUR VALUES</b></h2>
                <br/>
                <span ><u>FIN&PIN LAB</u></span>
                <br/>
                <br/>
                <span>We PIN for the right sustainable FINancial investment decision.</span>
                <br/>
                <br/>
                <span>We enable investors to make the most convenient, reliable, and customized investment decisions based on indigenous ESG ratings.</span>
                <span>Through ESG rating, Fin&Pin Lab offers risk mitigation to sustainable impact in financial investments. </span>
            </div>
        )
    }


    function Ratings() {
        return (
            <div>
                <>
                    <img src={img3}
                        className="main_3"
                        // style= {{ display: 'block', margin: '0 auto', float:'center', height: 420, width: 900,
                        // }} 
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        // alignItems: 'center'
                        alt="main_3"></img>
                </>
                <div/>
                <div/>
                <>
                    {/* <div style={{ marginLeft:300 }}>  */}
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {/* alignItems: 'center' */}
                        <h2 style={{color: '#736853'}}><b>OUR PRODUCTS and METHODOLOGY</b></h2>
                        <br/>
                        <span><u>ESG & ESGP Ratings</u></span>
                        <br/>
                        <br/>
                        <span>
                        {/* Fin&Pin Lab’s Environmental, Social, Governance and Profit (ESGP) data provides metrics based on corporate 
                        disclosure fundamental metrics and sentiment-analyzed news ratings. 
                        Our methodology includes machine-learned weighting process to natural language processing using Ko-BERT. */}
                        Fin & Pin Lab’s Environmental, Social and Governance (ESG) data provides metrics based on corporate disclosure fundamental metrics and sentiment-analyzed news ratings. 
                        Our methodology includes machine-learned weighting process to natural language processing using Ko-BERT. Depending on the industry, each new data subcategory weighting is differentiated based on machine learning. 
                        The news data sentiment is analyzed to be positive, neutral and negative, respectively assigned with +1, 0, -1 adjustment scores.
                        </span>
                        <br/>
                        <br/>
                        <span>
                        Fin & Pin Lab’s exclusive Environmental, Social, Governance and Profit (ESGP) rating further considers profit into consideration. 
                        The profit matrix is equated through machined learned fundamental data. 
                        Among profit factors, such as alpha, historical return, etc., machine extracts the most influential factors and differentiate each factors’ weighting. 
                        </span>
                        <br/>
                        <br/>
                        <span>
                        {/* Our rating workflow is as follows: */}
                        Our rating concerns following factors:
                        </span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </>
                <>
                    <img src={esgratingpg}
                        className="esgratingpg"
                        // style= {{ display: 'block', margin: '0 auto', textAlign: 'center', float:'center',  height: 320, width: 830,
                        // }} 
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        alt="esgratingpg"></img> 
                </>
                <br/>
                <br/>
                <>
                    <div>
                        <span>
                        {/* Our rating workflow is as follows: */}
                        Ratings are offered in following grades:
                        </span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </>
                <>
                    <img src={img4}
                        className="main_4"
                        // style= {{ display: 'block', margin: '0 auto', textAlign: 'center', float:'center',  height: 100, width: 830,
                        // }} 
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        alt="main_4"></img> 
                </>
                <br/>
                <br/>
                <>
                    <a href="/esgrating" style={{color: "#046242"}}>Learn More About ESG Rating ></a>
                    <br/>
                    <a href="/rating" style={{color: "#046242"}}>Learn More About ESGP Rating ></a>
                </>
            </div>
        )
    }


    function Recommend() {
        return (
            <div>
                <div>
                    <span><u>ESGP Recommendation</u></span>
                    <br/>
                    <br/>
                    <span>
                    Fin & Pin Lab provides stock investment recommendations based on ESGP ratings. 
                    Currently, we offer 25 recommendations which scored high ESG ratings, with Profit(P) rating in consideration. 
                    With subscription, one can enjoy personalized recommendation which additionally considers personal investment preference. 
                    </span>
                    <br/>
                    <br/>
                </div>
                <a href="/recommend" style={{color: "#046242"}}>Learn More ></a>
            </div>
        )
    }

    function Reports() {
        return (
            <div>
                <div>
                    <span><u>ESGP Reports</u></span>
                    <br/>
                    <br/>
                    <>
                        <img src={report}
                            className="report-half"
                        //     style= {{ display: 'block', margin: '0 auto', textAlign: 'center', float:'center',  height: 275, width: 850,
                        // }} 
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        alt="report-half"></img> 
                    </>
                    <br/>
                    <span>
                    Fin&Pin’s Lab provides an in-depth assessment ESG report on an individual firm basis. The report contains corporate disclosure fundamentals to recent ESG issues of the firm. A sample of the report can be viewed from the website. Reports are offered based on orders. 
                    </span>
                    <br/>
                    <br/>
                </div>
                <a href="/report" style={{color: "#046242"}}>Learn More></a>
            </div>
        )
    }

    function OurHistoryImage() {
        return (
            <div>
                <img src={historyimage}
                        className="historyImage"
                        style= {{  
                        height: 400, 
                        width: 550}} 
                        alt="history-img"></img>
            </div>
        )
    }

    function OurHistory() {
        return (
            <div>
                <div>
                {/* style={{paddingLeft: 50}} */}
                    <h2 style={{whiteSpace: 'nowrap', color: '#736853'}}><b>OUR VALUES & HISTORY</b></h2>
                    <br/>
                    <span>
                    FIN & PIN LAB: we PIN for the right sustainable FINancial investment decision.<br/>
                    We enable investors to make the most convenient, reliable, and customized investment decisions based on indigenous ESG ratings.<br/> 
                    Through ESG rating, Fin & Pin Lab offers risk mitigation to sustainable impact in financial investments.
                    </span>
                    <br/>
                    <br/>
                    <span>
                    Fin&Pin Lab pursues step-by-step sustainable growth; these are our moments toward growth.
                    </span>
                    <br/>
                    <br/>
                    <span>[2021] Pre-Startup Package: Sponsored by Korea Institute of Startup and Entrepreneurship Development 
                    </span>
                    <br/>
                    <br/>
                </div>
                {/* <a href="/report" style={{color: "#046242", paddingLeft: 50}}>Learn More></a> */}
            </div>
        )
    }



    function SignUp() {
        return (
            <div>
                <a href="/register" style={{color: "#046242", fontSize: '20px'}}><b>SIGN UP NOW></b></a>
                <div>
                    <span>
                    Be first to receive our ESG rating updates.
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }



    return (
        <div style={{ width: '70%', margin: '3rem auto' }}>

            <div>
            {/* style={{ textAlign: 'center'}} */}
                <br/>
                <br/>
                <OurProductsImage />
                <br/>
                <br/>
            </div>
            <div>
                <OurValues />
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <div style={{ textAlign: 'center' }}> */}
            <div>
                <Ratings />
            </div>
            <br/>
            <br/>
            <div>
                <Recommend />
            </div>
            <br />
            <br />
            {/* <div>
                <Reports />
                <br/>
            </div>
            <br />
            <br /> */}
            {/* <Row gutter={[16, 16]} justify='space-between'>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <OurHistoryImage />
                    <OurHistory />
                    <br/>
                    <br/>
                    </div>
            </Row> */}
            {/* <div>
                <OurHistory />
            </div>
            <br />
            <br /> */}
            <br/>
            <div>
                <SignUp />
            </div>
        </div>

            // <div>
            //     <Row gutter={[16, 16]}>
            //         <Col lg={12} xs={24} >
            //             <h2>OUR VALUES</h2>
            //             <br/>
            //             <span>FIN&PIN LAB: we PIN for the right sustainable FINancial investment decision. </span>
            //             <br/>
            //             <span>We enable investors to make the most convenient, reliable, and customized investment decisions based on indigenous ESG ratings.
            //             <br/>
            //             Through ESG rating, Fin&Pin Lab offers risk mitigation to sustainable impact in financial investments. 
            //             </span>
            //             <br/>
            //             <br/>
            //         </Col>
            //     </Row>
            // </div>
            // <div>
            //     <Row gutter={[16, 16]}>
            //         <Col lg={12} xs={24} >
            //             <h2>OUR PRODUCTS and METHODOLOGY</h2>
            //             <br/>
            //             <span> ESGP Ratings: <br/>
            //             Fin&Pin Lab’s Environmental, Social, Governance and Profit (ESGP) data provides metrics based on corporate disclosure fundamental metrics and sentiment-analyzed news ratings. 
            //             <br/>Our methodology includes machine-learned weighting process to natural language processing using Ko-BERT.
            //             </span>
            //             <br/>
            //             <span>We enable investors to make the most convenient, reliable, and customized investment decisions based on indigenous ESG ratings. 
            //             Through ESG rating, Fin&Pin Lab offers risk mitigation to sustainable impact in financial investments. 
            //             <br/>
            //             <br/>
            //             Our rating workflow is as follows:
            //             </span>
            //             <
            //             <br/>
            //             <br/>
            //         </Col>
            //     </Row>
            // </div>
    )
}

export default HomePage