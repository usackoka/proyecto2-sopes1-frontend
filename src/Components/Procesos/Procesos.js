import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import apiGet from "../../services/apiGet";
import apiPost from "../../services/apiPost"

const Index = (props) => {

  const [formData,setFormData] = useState([

  ])

  const columns = [
    {dataField:"",text:"Columna 1"}
  ]

  useEffect(()=>{
    const getData = async () => {
      //const data2 = await apiPost.generalData.setUser({id:1,nombre:"OSCAR CUELLAR"})
      const data = await apiGet.generalData.getUsers2(function(response){
        console.log("RESPUESTA API")
        console.dir(response)
      })
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
