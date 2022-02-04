import React, { useState, useEffect } from 'react'
import { Table, Button, Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import Axios from 'axios';
// import { useHistory } from "react-router";

function EsgRatingTable() {

    // const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    //antd sample보고 따라
    const [esgstate, setEsgState] = useState({ filteredInfo: null, sortedInfo: null})
    //const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setLoading(true)
        Axios.get('/api/esgdata/getEsgdata') //('/api/esgdata/esgdatas') //데이터 가져오기
            .then(response  => {
                if(response.data.success) {
                    setLoading(false)
                    console.log(response.data)
                    setDataSource(response.data.esgdata)
                } else {
                    alert('데이터 가져오기를 실패')
                }
            })
    }, [])
    
    const getTableSearchProps = (dataIndex) => {
        return {
            filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
            }) => {
                return (
                    <>
                        <Input
                            autoFocus
                            placeholder="Type text here"
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                // confirm();
                                //confirm({ closeDropdown: false });
                            }}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                        <Button
                            onClick={() => {
                                confirm();
                            }}
                            type="link"
                        >
                            Search
                        </Button>
                        <Button
                            onClick={() => {
                                clearFilters();
                            }}
                            type="link"
                        >
                            Reset
                        </Button>
                    </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) => {
                return record[dataIndex].toLowerCase().includes(value.toLowerCase());
            },
        };
    };

    ///칼럼값들
    const columns = [
        {   title: 'Index',
            dataIndex: 'index',
            key: 'index',
            sorter: (a, b) => a.index - b.index,
            sortedDirections: ['descend']
        },
        {
            title: 'Ticker',
            dataIndex: 'ticker',
            ...getTableSearchProps("ticker"),
            key: 'ticker'
        },
        {
            title: 'Name (종목)',
            dataIndex: 'tname',
            key: 'tname',
            ...getTableSearchProps("tname"),
            render: (text, record) => 
                // <a href={'/rating/' + record._id}>{text}</a>
                <a href={'/rating/' + record.ticker}>{text}</a>
        },
        {
            title: 'Industry (업종)',
            dataIndex: 'industry',
            key: 'industry',
            filters: [
                { value: "제조업", text: "제조업" },
                { value: "서비스업", text: "서비스업" },
                { value: "기타금융", text: "기타금융" },
                { value: "유통업", text: "유통업" },
                { value: "섬유의복", text: "섬유의복" },
                { value: "운수창고업", text: "운수창고업" },
                { value: "증권", text: "증권" },
                { value: "보험", text: "보험" },
                { value: "전기전자", text: "전기전자" },
                { value: "화학", text: "화학" },
                { value: "철강금속", text: "철강금속" },
                { value: "의약품", text: "의약품" },
                { value: "비금속광물", text: "비금속광물" },
                { value: "운수장비", text: "운수장비" },
                { value: "통신업", text: "통신업" },
                { value: "기타제조업", text: "기타제조업" },
                { value: "종이목재", text: "종이목재" },
                { value: "음식료품", text: "음식료품" },
                { value: "광업", text: "광업" },
                { value: "전기가스업", text: "전기가스업" },
                { value: "농업, 임업 및 어업", text: "농업, 임업 및 어업" },
                { value: "의료정밀", text: "의료정밀" },
                { value: "기타제조업", text: "기타제조업" }
            ],
            //filteredValue: esgstate.filteredInfo.industry, //|| null,
            // if(filteredValue !== null) {
            onFilter: (value, record) => record.industry.includes(value), //.startsWith(text)
            filterSearch: true,
            //width: '40%',
            // }
        },
        // {
        //     title: 'ESG Rating',
        //     dataIndex: 'esg_rating',
        //     key: 'esg_rating',
        //     sorter: (a, b) => a.esg_rating - b.esg_rating,
        //     sortedDirections: ['descend']
        //     // sortOrder: esgstate.sortedInfo.columnKey === 'esg_rating' && esgstate.sortedInfo.order,
        //     // ellipsis: true,
        //     //key: 'key'
        // },
        {
            title: 'E (환경)',
            dataIndex: 'e_class',
            sorter: (a, b) => a.e_class[0].localeCompare(b.e_class[0]) || b.e_class.length - a.e_class.length,
            sortedDirections: ['descend']
            //key: 'key',
            // sorter: (a, b) => a.e_class - b.e_class,
            // sortedDirections: ['descend']
            // sorter: (a, b) => a.e_class.localeCompare(b.e_class)
            //sorter: (a, b) => a.e_class.length - b.e_class.length,
            ///a.e_class.localeCompare(b.e_class) // || 
            
        },
        {
            title: 'S (사회)',
            dataIndex: 's_class',
            //key: 'key',
            // sorter: (a, b) => a.s_class - b.s_class,
            // sortedDirections: ['descend']
            sorter: (a, b) => a.s_class[0].localeCompare(b.s_class[0]) || b.s_class.length - a.s_class.length,
            sortedDirections: ['descend']
        },
        {
            title: 'G (지배구조)',
            dataIndex: 'g_class',
            //key: 'key',
            // sorter: (a, b) => a.g_class - b.g_class,
            // sortedDirections: ['descend']
            sorter: (a, b) => a.g_class[0].localeCompare(b.g_class[0]) || b.g_class.length - a.g_class.length,
            sortedDirections: ['descend']
        },
        // {
        //     title: 'P 수익',
        //     dataIndex: 'p_class',
        //     //key: 'key',
        //     // sorter: (a, b) => a.p_class - b.p_class,
        //     // sortedDirections: ['descend']
        //     sorter: (a, b) => a.p_class[0].localeCompare(b.p_class[0]) || b.p_class.length - a.p_class.length,
        //     sortedDirections: ['descend']
        // },
        // {
        //     title: 'Total',
        //     dataIndex: 'total',
        //     sorter: (a, b) => a.total[0].localeCompare(b.total[0]) || b.total.length - a.total.length,
        //     sortedDirections: ['descend']
        //     //key: 'key',
        //     // sorter: (a, b) => a.total - b.total,
        //     // sortedDirections: ['descend'],
       
        // },
        {
            title: 'ESG Total',
            dataIndex: 'esg_total',
            sorter: (a, b) => a.esg_total[0].localeCompare(b.esg_total[0]) || b.esg_total.length - a.esg_total.length,
            sortedDirections: ['descend']
            //key: 'key',
            // sorter: (a, b) => a.total - b.total,
            // sortedDirections: ['descend'],
       
        },
    ];
  
    return (
        <>
            {/* <Space style={{ marginBottom: 16 }}> */}
            {/* <Button onClick={setESGSort}>Sort age</Button>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button> */}
                {/* </Space> */}
            <Table 
                loading={loading} 
                className = "compLink" 
                columns={columns} 
                dataSource={dataSource} 
                // onChange={handleChange} 
                />
        </>
    );
    // );
      
}

export default EsgRatingTable