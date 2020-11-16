import React from 'react';  
import ReactTable from 'react-table-6'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-table-6/react-table.css'
//import '../CSS/index.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'; 

  
class graph2 extends React.Component {  

  constructor() {
    super();
    this.state={a:"ddud",datalength:0,data:[{'DataSeries-A':33,'DataSeries-B':33,'DataSeries-C':33}],columns: [{  
      Header: 'DataSeries-A',  
      accessor: 'DataSeries-A'  
      },{  
      Header: 'DataSeries-B',  
      accessor: 'DataSeries-B'  
      },{  
        Header: 'DataSeries-C',  
        accessor: 'DataSeries-C'  
        }]  }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getTableValuesFromServer = this.getTableValuesFromServer.bind(this);
    this.displayPrompt = this.displayPrompt.bind(this);
    this.temp2 = this.temp2.bind(this);
    
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    //console.log("hello==-----------------------------------------------")
  this.getTableValuesFromServer()
   
 }
 getTableValuesFromServer()
{
      axios.get(`http://localhost:5000/getCSVForDemonstration`)
        .then( (response)=>{
          
          this.setState({data:response.data,datalength:response.data.length
        })
      }
            
    
    );
}
 displayPrompt()
 {var userName = prompt('Please state you reason for booking an appointment')
  // window.location='/d'
 
 }
 temp2()
 { this.setState({
  a: "rock"
});
 
 }


getTemp1()
{
      // axios.get(`http://localhost:5000/temp1`)
      //   .then( 
      //     (response)=>{this.setState({
      //       a: "Email Already Exists"
      //     })
      //   });
   // return 'x';
    // searchFunction1(this.state.search, this.state.packaging, this.state.originlocation, this.state.value.min, this.state.value.max).then((products) => {
		// 	// console.log(products1)
		// 	this.setState({ products });
		// });
}




  render() {  
     const mdata = [{  
        name: 'Ayaan',  
        age: 26  
        },{  
         name: 'Ahana',  
         age: 22  
         },{  
         name: 'Peter',  
         age: 40      
         },{  
         name: 'Virat',  
         age: 30  
         },{  
         name: 'Rohit',  
         age: 32  
         },{  
         name: 'Dhoni',  
         age: 37  
         }]  
         const a='rpck'
     const columns = [{  
       Header: 'Namrte',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]  
    return (  
      <div className="container">
      <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
      <h1>hello</h1>
      <h1 id='test1'>hello</h1>
        
          <div>
          <table class="table">
          <thead>
               <tr>
            
                 <th scope="col">Morning</th>
                 <th scope="col">Afternoon</th>
                 
               </tr>
             </thead>
             <tbody>
               <tr>
                 
                 <td>9.30 am</td>
                 <td>12.45 pm</td>
                
               </tr>
               <tr>
                 
                 <td class="booked">9.45 am</td>
                 <td>1.00 pm</td>
                
               </tr>
               <tr>
                
                 <td>10.00 am</td>
                 <td class="booked">1.15 pm</td>
               
               </tr>
               <tr>
                
                 <td>10.15 am</td>
                 <td>1.30 pm</td>
               
               </tr>
               <tr>
                
                 <td>10.30 am</td>
                 <td>1.45 pm</td>
               
               </tr>
             </tbody>
          </table>
          </div>
          </div> 
          </div> 
          </div> 
          <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">

            <h1>sector 2</h1>
            <ReactTable
            data={mdata}  
            columns={columns} 
            showPagination={false} 
            resolveData={data => data.map(row => row)} 
            defaultPageSize={Object.keys(mdata).length+3}
            sortable={false}
            resizable={false}
/>
            <h1>hdd</h1>
            <h1>kk</h1>
            <h1>{this.state.a}</h1>
            <h1>kk</h1>
            <h1>{this.state.datalength}</h1>

            <ReactTable
            data={this.state.data}  
            columns={this.state.columns} 
            showPagination={false} 
            resolveData={data => data.map(row => row)} 
            defaultPageSize={365}
            sortable={false}
            resizable={false}
            
/>

            <button onClick={this.temp2}>MessageBOX show</button>
            </div></div></div>
          </div>     
    )  
  }  
}  
export default graph2;

