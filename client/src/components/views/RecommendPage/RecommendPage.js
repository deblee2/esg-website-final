import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import Icon from "@ant-design/icons";
import RecoTable from './RecoTable';
import { Table } from 'antd';
import img4 from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/main_4.png";

//const { Meta } = Card;

function RecommendPage() {

    const [Esgdatas, setEsgdatas] = useState([])
    const [PostSize, setPostSize] = useState()

    const recommends = (variables) => {
        //Axios.post('/api/rating/getEsgRatings', variables) //여기 바꿔야지
        //백엔드에서 데이터 가져오기
        Axios.post('/api/recommend/recommends', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setEsgdatas([...Esgdatas, ...response.data.recommends])
                    } else {
                        setEsgdatas(response.data.recommends)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch esg recommend datas')
                }
            })

    }


    return (
        <div style={{ width: '70%', margin: '3rem auto', textAlign: 'center' }}>
            <div>
                <h1 style={{color: '#736853'}}>Fin & Pin Lab’s ESGP Recommendation</h1>
                <h3 style={{color: '#E0c691'}}><b>In-depth analysis on ESGP with latest AI technology</b></h3>
                <br />
            </div>
            <div> 
                <span>We provide investment recommendations based on Environment, Social, Governance & Profit (ESGP) rating.<br></br><br></br>
                    The following recommendation consists of selected 25 KOSPI constituents. <br></br>
                    The 25 securities are selected through machine learning.<br></br>
                    Compared to its peers, selected 25 securities received high ESGP ratings.
                    <br></br><br></br><br></br>
                </span>
            </div>

            {/* Filter  */}
            <div>
                <Row gutter={[16, 16]}>
                    {/* {renderCards} */}
                    <RecoTable/>
                    {/* <div style={{ textAlign: 'center' }}>
                        <h3>ESG and profit rating based on deep learning algorithm</h3>
                    </div> */}
                </Row>
            </div>
            <br/><br/>
            <div style={{ textAlign: 'center' }}>
                <span>
                With subscription, enjoy further in-depth personal preference based recommendations.
                </span>
                <br/>
                <br/>
                <br/>
            </div>
            <>
                <img src={img4}
                    className="main_4"
                    // style= {{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center',  height: 100, width: 830,
                    // }} 
                    style = {{width: '90%', margin: 'auto', display: 'block'}}
                    alt="main_4"></img> 
            </>
            {/* <br /> */}
        </div>
    )
}

export default RecommendPage
