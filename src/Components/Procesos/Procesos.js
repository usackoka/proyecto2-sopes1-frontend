import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const Index = (props) => {

  const [formData,setFormData] = useState([

  ])

  const columns = [
    {dataField:"",text:"Columna 1"}
  ]

  useEffect(()=>{
    const getData = async () => {
    }

    if(!formData.llenado){
      getData()
    }
  },[])

  return (
    <Fragment>
      <BootstrapTable
        keyField="tbl_procesos"
        data={formData}
        columns={columns}
        bordered={false}/>
    </Fragment>
  );
};

export default Index;
