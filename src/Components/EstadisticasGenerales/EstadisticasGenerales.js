import React, { Fragment, useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import apiGet from "../../services/apiGet"

class EstadisticasGenerales extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      formData:[
        {departamento:"",edad:0,estado:"",forma_contagio:"",nombre:""}
      ],
      formData2:[
        {departamento:"",cantidad:0}
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
      const data2 = await apiGet.generalData.getTopCasos();
      //muestro sólo los primeros 3
      var top = 3;
      let listCasos = []
      for(const [departamento,cantidad] of data2.data){
        listCasos.push({departamento:departamento,cantidad:cantidad})
        top--
        if(top==0) break;
      }
      this.setState({...this.state,formData2:listCasos,date:new Date()})
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
      {dataField:"nombre",text:"Nombre",filter: textFilter({ placeholder: "Buscar..." })},
      {dataField:"edad",text:"Edad"},
      {dataField:"estado",text:"Estado"},
      {dataField:"forma_contagio",text:"Forma de Contagio"},
      {dataField:"departamento",text:"Departamento"}
    ]

    const columns2 = [
      {dataField:"departamento",text:"Departamento"},
      {dataField:"cantidad",text:"Cantidad de Casos"},
    ]

    return (
      <Fragment>
        <h2>Ultima actualización: {this.state.date}</h2>
        <h1>Top Departamentos Afectados</h1>
        <BootstrapTable
          keyField="tbl_top"
          data={this.state.formData2}
          columns={columns2}
          bordered={false}
          />
        <h1>Estadísticas Generales</h1>
        <BootstrapTable
          keyField="tbl_todos"
          data={this.state.formData}
          columns={columns}
          bordered={false}
          filterPosition="top"
          filter={filterFactory()}
          pagination={paginationFactory()}
          />
      </Fragment>
    );
  }
};

export default EstadisticasGenerales;
