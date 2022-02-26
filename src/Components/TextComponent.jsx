import { Component } from "react";

class TextComponent extends Component{
    constructor(...props){
        super(...props);
    }

    render(){
        return(
            <>            
                <textarea 
                    id="text_area" 
                    name="text_area" 
                    placeholder="Enter your text..." 
                    onChange={this.props.handleTextChange}
                />
                <button 
                    className="btn btn-success"
                    onClick={this.props.sendAnswer}
                >
                    Send your answer
                </button>
            </>
        )
    }
}

export default TextComponent;