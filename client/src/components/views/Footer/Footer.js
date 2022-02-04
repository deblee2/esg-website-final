import React from 'react'
import {Icon} from "@ant-design/icons";

function Footer() {
    return (
        // <div style={{
        //     height: '80px', display: 'flex',
        //     flexDirection: 'column', alignItems: 'center',
        //     justifyContent: 'center', fontSize:'1rem'
        // }}>
        //    <p>The most convenient, reliable and customized investment decision maker</p>
        // </div>
        <div style={{width: '100%', height: '380px', backgroundColor: '#F5F5F5'}}>
            <div style={{ 
                width: '70%', margin: '3rem auto',
                height: '80px', display: 'flex',
                flexDirection: 'column', alignItems: 'left',
                justifyContent: 'left', fontSize:'1rem',
            }}>
            <br /><br />
            <span>핀앤핀 주식회사 Fin & Pin Inc.</span>
            <span>대표: 이지수</span>
            <span>사업자 등록번호: 108-86-17906</span>
            <span>FAX: 0504-430-8978</span>
            <span>Email: sue.finpin@gmail.com</span>
                <br />
                <br />
                <div>
                <b>핀앤핀랩은 고객님의 투자원금과 수익률을 보장하지 않습니다.</b>
                </div>
                <div> 
                None of the information contained on this site constitutes a solicitation, offer, opinion, endorsement or recommendation by Fin and Pin Lab to buy or sell any security, or to provide legal, tax, accounting, or investment advice or services regarding the profitability or suitability of any security or investment.
                </div>
            </div>
        </div>
    )
}

export default Footer
