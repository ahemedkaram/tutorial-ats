import { Component }  from "react";
import StatisticsComponent from "./StatistictsComponent";
import TextComponent from "./TextComponent";
import '../CSS/Main.css'

class Main extends Component{
    constructor(...props){
        super(...props);
        this.state = {
            current_text: ""
        }
        this.sendAnswer = this.sendAnswer.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    sendAnswer(){
        console.log(this.state.current_text);
    }

    handleTextChange(event){
        let temp_text = event.target.value
        this.setState({current_text: temp_text})
    }

    render(){
        return(
            <div className="main_div">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <TextComponent 
                                sendAnswer={this.sendAnswer}
                                handleTextChange={this.handleTextChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <StatisticsComponent/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Main;