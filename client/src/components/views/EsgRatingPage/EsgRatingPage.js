import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import Icon, { TranslationOutlined } from "@ant-design/icons";
import EsgRatingTable from './EsgRatingTable';
import { Table } from 'antd';
import esgimage from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/esgratingpg.png";
import img4 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_4.png";
import { auto } from 'async';
// import esgimage from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/esgratingpg.png";
// import img4 from "C:/Users/user/Downloads/esg-website-main/esg-website-main/client/src/imgs/main_4.png";

//const { Meta } = Card;

function EsgRatingPage() {

    const [Esgdatas, setEsgdatas] = useState([])
    const [PostSize, setPostSize] = useState()

    const getEsgRatings = (variables) => {
        // Axios.post('/api/product/getProducts', variables)
        Axios.post('/api/rating/getEsgRatings', variables)
        //Axios.post('/api/product/getEsgdata', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setEsgdatas([...Esgdatas, ...response.data.esgdatas])
                    } else {
                        setEsgdatas(response.data.esgdatas)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch esg rating datas')
                }
            })

    }


    return (
        <div style={{ width: '70%', margin: '3rem auto', textAlign: 'center' }}>
            <div>
                <br/><br/>
                <h1 style={{color: '#736853'}}>Fin & Pin Lab’s ESG Rating</h1>
                <h3 style={{color: '#E0c691'}}><b>Environment, Social, Governance (ESG) Rating</b></h3>
                {/* <br /> */}
            </div>
            <div> 
                {/* <span>We provide Environment, Social, and Governance (ESG) ratings.<br></br>
                The following ratings cover KOSPI constituents.<br></br><br></br>
                With subscription, be the first to receive weekly updates on the ESGP ratings.<br></br>
                For further details, please refer to the main page for the rating logistics.<br></br><br></br>
                <br></br><br></br><br></br>
                </span> */}
                <span>
                The following ratings cover KOSPI constituents. 
                </span>
                <br/><br/>
                {/* <br/><br/> */}
            </div>

            {/* Filter  */}
            <div>
                <img src={esgimage} className="esgRatingImage"
                    style={{ 
                    width: '90%', margin: 'auto', display: 'block'}} alt="esgrating-img"></img>
                    {/* style={{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center', 
                    height: 310, width: 830}} */}
            </div>
            <br/><br/>
            {/* <br/><br/> */}
            <div style={{width: '100%', margin: 'auto', display: 'block'}}> 
                <Row style={{justify: 'center'}}>
                    {/* {renderCards} */}
                    <EsgRatingTable/>
                </Row>
            </div>
            <br/><br/>
            <div style={{ textAlign: 'center' }}>
                <span>
                With subscription, be the first to receive weekly updates on the ESG ratings.
                </span>
                <br/>
                <span>
                For further details, please refer to the main page for the rating logistics. 
                </span>
                <br/>
                <br/>
                <br/>
                <>
                    <img src={img4}
                        className="main_4"
                        // style= {{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center',  height: 100, width: 830,
                        // }} 
                        style= {{ width: '90%', margin: 'auto', display: 'block'
                        }} 
                        alt="main_4"></img> 
                </>
                <br></br><br></br>
            </div>
            {/* <br /> */}
        </div>
    )
}

export default EsgRatingPage
