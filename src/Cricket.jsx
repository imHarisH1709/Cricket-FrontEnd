import React,{Component} from 'react';
import './Cricket.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            sno:'',
            playername:'',
            ranking:'',
            rating:'',
            teamname:''
        };
    }
    
    handlesnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handleplayernameChange=(event)=>{
        this.setState({playername:event.target.value})
    };
    handlerankingChange=(event)=>{
        this.setState({ranking:event.target.value})
    };
    handleratingChange=(event)=>{
        this.setState({rating:event.target.value})
    };
    handleteamnameChange=(event)=>{
        this.setState({teamname:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            playername: this.state.playername,
            ranking: this.state.ranking,
            rating: this.state.rating,
            teamname: this.state.teamname
        };
        
        axios.post('http://127.0.0.1:8080/p', data)
    }

    render(){
    return ( 
        <><center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>CRICKET STATS</h1>
            
            <div className='row'>
                <label>sno : </label><br></br>
                <input type="number" sno='sno' placeholder='  Enter your sno...' value={this.state.sno}
                    onChange={this.handlesnoChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.sno}</p> */}

            <div className='row'>
                <label>playername : </label><br></br>
                <input type="text" sno='playername' placeholder='  Enter your playername...' value={this.state.playername}
                    onChange={this.handleplayernameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.playername}</p> */}

            <div className='row'>
                <label>ranking : </label><br></br>
                <input type="ranking" sno='ranking' placeholder='  Enter your ranking...' value={this.state.ranking}
                    onChange={this.handlerankingChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.ranking}</p> */}

            <div className='row'>
                <label>rating : </label><br></br>
                <input type="rating" sno='rating' placeholder='  Enter the rating...' value={this.state.rating}
                    onChange={this.handleratingChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.rating}</p> */}
            <div className='row'>
                <label>teamname : </label><br></br>
                <input type="teamname" sno='teamname' placeholder='  Enter the teamname...' value={this.state.teamname}
                    onChange={this.handleteamnameChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.teamname}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>SUBMIT</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default ValidatingForm