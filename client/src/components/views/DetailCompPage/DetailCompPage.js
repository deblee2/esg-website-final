import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import CompInfo from './Sections/CompInfo';
// import { useDispatch } from 'react-redux';
function DetailCompPage(props) {
    // const dispatch = useDispatch();
    // const compId = props.match.params.compId
    const compTicker = props.match.params.compTicker
    const [Comp, setComp] = useState([])

    useEffect(() => {
        // Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
        //Axios.get(`/api/rating/comps_by_id?id=${compId}&type=single`) //여기 이해 못함
        // Axios.get(`/api/rating/comps_by_id?id=${compTicker}&type=single`)
        //Axios.get(`/api/rating/comps_by_ticker?ticker=${String(compTicker)}&type=single`)
        Axios.get(`/api/rating/comps_by_ticker?ticker=${compTicker.toString()}&type=single`)
            .then(response => {
                setComp(response.data[0])
            })
    }, [])

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem', alignItems: 'center'}}>

            <div style={{ display: 'flex'}}>
                <h1>{Comp.title}</h1>
            </div>

            <br />

            <Row > 
                {/* gutter={[16, 16]} */}
                {/* <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col> */}
                {/* <Col lg={12} xs={24}> */}
                <Col>
                    <CompInfo
                        detail={Comp} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailCompPage
