import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import Icon from "@ant-design/icons";
import EsgTable2 from './Sections/EsgTable2';
import { Table } from 'antd';
import esgimage from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/esgpratingpg.png";
import img4 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_4.png";

//const { Meta } = Card;

function LandingPage() {

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
                <h1 style={{color: '#736853'}}>Fin & Pin Lab’s ESGP Rating</h1>
                <h3 style={{color: '#E0c691'}}><b>Environment, Social, Governance & Profit (ESGP) Rating</b></h3>
            </div>
            <div>
                <span>
                Fin & Pin Lab’s exclusive Environmental, Social, Governance and Profit (ESGP) rating further considers profit into consideration.
                </span>
                <br/>
                <span>
                The following ratings cover KOSPI constituents. 
                </span>
                <br/><br/>
            </div>

            {/* Filter  */}
            <div>
                <img src={esgimage} className="esgRatingImage"
                    // style={{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center', 
                    // height: 365, width: 830}} 
                    style = {{width: '90%', margin: 'auto', display: 'block'}}
                    alt="esgrating-img"></img>
            </div>
            <br/><br/>
            <div>
                <Row gutter={[16, 16]}>
                    {/* {renderCards} */}
                    <EsgTable2/>
                    {/* <div style={{ textAlign: 'center' }}>
                        <h3>ESG and profit rating based on deep learning algorithm</h3>
                    </div> */}
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
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        alt="main_4"></img> 
                </>
                <br></br><br></br>
            </div>
            {/* <br /> */}
        </div>
    )
}

export default LandingPage
