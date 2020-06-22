import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import apiGet from "../../services/apiGet"

const EstadisticasGenerales = (props) => {

  const [formData,setFormData] = useState([

  ])

  const columns = [
    {dataField:"",text:"Columna 1"}
  ]

  useEffect(()=>{
    const getData = async () => {
      const data = await apiGet.generalData.getCasos();
      console.log("CASOS: ",data)
    }
    
    getData()
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

export default EstadisticasGenerales;
