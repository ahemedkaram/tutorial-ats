import { Component } from "react";

class StatisticsComponent extends Component{
    constructor(...props){
        super(...props);
    }

    render(){
        return(
            <div className="statisticts_container">
                <div className="stats">
                    <p style={{fontSize:'20px'}}>Your scores</p>

                    <label>Score 1</label>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar"
                            style={{width:'0'}}
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>

                    <br/>

                    <label>Score 2</label>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar"
                            style={{width:'25%'}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>

                    <br/>

                    <label>Score 3</label>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar"
                            style={{width:'50%'}}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>

                    <br/>

                    <label>Score 4</label>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar"
                            style={{width:'100%'}}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsComponent;