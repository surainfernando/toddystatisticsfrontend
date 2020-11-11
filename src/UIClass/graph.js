
import React, {PropTypes} from 'react'
import axios from 'axios'; 

export default class Login extends React.Component {


    constructor() {
        super();
        
        this.activateLasers = this.activateLasers.bind(this);
        this.postRequest = this.postRequest.bind(this);
     
  
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/jsondisplay`)
        .then( 
            this.setState({
            emaillabel1: "The emaile ."
          })
         
    );
    }
    activateLasers(event){

    //     axios.get(`http://localhost:5000`)
    //     .then( 
    //         this.setState({
    //         emaillabel1: "The emaile ."
    //       })
    
    // );
    this.displayPrompt()
        
      }

    postRequest(event)
    {
        // axios.post('http://localhost:5000/register', {
        //     firstname: 'Fred',
        //     lastname: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        this.displayPrompt()
    }



    displayPrompt()
{var userName = prompt('Please state you reason for booking an appointment')
 // window.location='/d'

}

    render(){
        return (
            <div>
             
           
            <nav className="navbar">
            
            </nav>
                <div>
                  
                  <h1>home</h1>
                  <button onClick={this.displayPrompt}>MessageBOX show</button>
        
        
               
                  
                </div>
              
              </div>
        
        
          );
    }
}


  



