import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';

function CompInfo(props) {

    const [Comp, setComp] = useState({})

    useEffect(() => {

        setComp(props.detail)

    }, [props.detail])

    // return (
    //     <div>
    //         <Descriptions title="Company Info">
    //             <Descriptions.Item label="Ticker: "> {Comp.ticker}</Descriptions.Item>
    //             <Descriptions.Item label="Name (종목): ">{Comp.tname}</Descriptions.Item>
    //             <Descriptions.Item label="Industry (업종): ">{Comp.industry}</Descriptions.Item>
    return (
        <div>
            <Descriptions title="Company Info">
                {/* <Descriptions.Item label="Ticker"> {Comp.ticker}</Descriptions.Item> */}
                <Descriptions.Item label="Ticker"> {Comp.ticker}</Descriptions.Item>
                <Descriptions.Item label="Name (종목)">{Comp.tname}</Descriptions.Item>
                <Descriptions.Item label="Industry (업종)">{Comp.industry}</Descriptions.Item>
                <Descriptions.Item label="E (환경)" span={3} className="e_class"> {Comp.e_class}</Descriptions.Item>
                <Descriptions.Item label="Climate Change (기후변화)" className="clim_change"> {Comp.clim_change}</Descriptions.Item>
                <Descriptions.Item label="Natural Resources (자원활용)" className="nat_res"> {Comp.nat_res}</Descriptions.Item>
                <Descriptions.Item label="Environmental Protection (친환경보호)" className="env_protect"> {Comp.env_protect}</Descriptions.Item>
                <Descriptions.Item label="S (사회)" span={3} className="s_class"> {Comp.s_class}</Descriptions.Item>
                <Descriptions.Item label="Human Resources (인적자원)" className="hr"> {Comp.hr}</Descriptions.Item>
                <Descriptions.Item label="Product Safety (제품책임)" className="prod_safe"> {Comp.prod_safe}</Descriptions.Item>
                <Descriptions.Item label="Social Impact (지역사회)" className="soc_impact"> {Comp.soc_impact}</Descriptions.Item>
                <Descriptions.Item label="Corporate Competition (기업경쟁)" span={3} className="corp_compete"> {Comp.corp_compete}</Descriptions.Item>
                <Descriptions.Item label="G (지배구조)" span={3} className="g_class"> {Comp.g_class}</Descriptions.Item>
                <Descriptions.Item label="Governance (지배구조)" className="gov"> {Comp.gov}</Descriptions.Item>
                <Descriptions.Item label="Corporate Ethics (기업윤리)" span={2} className="corp_ethic"> {Comp.corp_ethic}</Descriptions.Item>
                <Descriptions.Item label="P (수익)" span={3} className="p_class"> {Comp.p_class}</Descriptions.Item>
                <Descriptions.Item label="ESG Total" span={3} className="esg_total"> {Comp.esg_total}</Descriptions.Item>
                <Descriptions.Item label="ESGP Total" span={3} className="total"> {Comp.total}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
        </div>
    )
}

export default CompInfo