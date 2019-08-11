import React, {Component} from 'react';
import AddingComponent from "../component/ReviewComponents/AddingComponent";

export default class AddingRContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <AddingComponent/>
            </div>
        )
    }

}
