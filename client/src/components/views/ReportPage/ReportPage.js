import React, { useEffect, useState, Fragment } from 'react'
// import HomeInfo from './HomeInfo';
import { Col, Card, Row } from 'antd';
import reportimage from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/report-full.png";
// import { Link } from 'react-outer-dom';

function ReportPage() {
    const [state, setstate] = useState()

    function OurValues() {
        return (
            <>
                <div>
                    {/* <span>Empowering Sustainable Financial Decision through Technology</span>
                    <br/>
                    <br/> */}
                    {/* style={{ fontSize: '40px' }} */}
                    <h1 style={{color: '#736853'}}>Fin & Pin Lab’s ESGP Report</h1>
                    <h3 style={{color: '#E0c691'}}><b>In-depth analysis on ESGP with latest AI technology</b></h3>
                </div>
            </>
        )
    }

    function OurProductsImage() {
        return (
            <div>
                <a href="https://drive.google.com/file/d/1Ccg3WVf4FP0koPkjKbNIOgkeM_ZLoYER/view?usp=sharing">
                    <img src={reportimage}
                        className="reportImage"
                        // style={{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center', 
                        // height: 610, width: 950}}
                        style = {{width: '90%', margin: 'auto', display: 'block'}}
                        alt="report-img"></img>
                    {/* height: 550, width: 420, */}
                    {/* style= {{ display: 'block', margin: '0 auto', alignItems: 'center', float:'center', height: 700, width: 1000,
                        }}  */}
                </a>
            </div>
        )
    }

    function OurProducts() {
        return (
            // <div style={{ float: 'left', marginRight: 500}}>
            // <div style={{paddingLeft: 50}}>
            // <div style={{textAlign: 'center'}}>
            <div style={{display: 'block', margin: '0 auto', paddingLeft: 80}}>
                {/* <h2><b>ESGP Report</b></h2> */}
                {/* <h2 style={{whiteSpace: 'nowrap'}}><b>ESGP Report</b></h2> */}
                <span>For the ESGP Report, clients can select a security to be analyzed. </span>
                <br/><br/>
                <span>The client can customize the following factors: </span>
                <br/>
                <span>- Evaluated Security</span>
                <br/>
                <span>- Evaluation Criteria ESGP (Environment, Social, Governance, Profit)</span>
                <br/>
                <span>- Numerical Data Coverage Period</span>
                <br/>
                <span>- News Data Coverage Period</span>
                <br/><br/>
                <span>We provide a sample report for our potential clients as reference.</span>
                <br/><br/>
                <span>To learn more, please click the report image to read our </span>
                <a href="https://drive.google.com/file/d/1Ccg3WVf4FP0koPkjKbNIOgkeM_ZLoYER/view?usp=sharing"style={{color: "#046242"}}><b><u>sample report</u></b></a>
                <span>.</span>
                <br/><br/><br/>
                {/* <span>Please fill out the following form to request for estimates on the customized report.</span> */}
                <span>Please fill out the following </span>
                <a href="https://forms.gle/dWKkdCpHE4MqdBTH9" style={{color: "#046242"}}><b><u>form</u></b></a>
                <span> to request for estimates on the customized report.</span>
                <br/><br/><br/><br/>
            </div>
        )
    }

    return (
        <div style={{ width: '70%', margin: '3rem auto' }}>

            <div style={{ textAlign: 'center'}}>
                <OurValues />
                <br/>
                <br/>
            </div>
            <div>
                {/* <Row gutter={[16, 16]} justify='space-between'> */}
                    {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> */}
                <div>
                    <OurProductsImage />
                    <br/><br/>
                    <OurProducts />
                </div> 
                {/* </Row> */}
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ReportPage