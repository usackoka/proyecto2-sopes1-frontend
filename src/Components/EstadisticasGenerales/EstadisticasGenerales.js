import React, { Fragment, useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import apiGet from "../../services/apiGet"

class EstadisticasGenerales extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formData:[
        {departamento:"",edad:0,estado:"",forma_contagio:"",nombre:""}
      ]
    }

    //recupero por primera vez la información general
    this.tick()
  }

  tick(){
    const getData = async () => {
      console.log("instanciando ")
      const data = await apiGet.generalData.getCasos();
      this.setState({...this.state,formData:data.data})
    }
    
    getData()
  }

  componentDidMount(){
    //actualizar cada 5 segundos
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillMount(){
    clearInterval(this.interval);
  }

  render(){
    const columns = [
      {dataField:"nombre",text:"Nombre"},
      {dataField:"edad",text:"Edad"},
      {dataField:"estado",text:"Estado"},
      {dataField:"forma_contagio",text:"Forma de Contagio"},
      {dataField:"departamento",text:"Departamento"}
    ]

    return (
      <Fragment>
        <BootstrapTable
          keyField="tbl_procesos"
          data={this.state.formData}
          columns={columns}
          bordered={false}/>
      </Fragment>
    );
  }
};

export default EstadisticasGenerales;
