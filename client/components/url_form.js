import React, { Component } from 'react';

class UrlForm extends Component{

    constructor(props){
        super(props);
        this.state = { error: '' };
    }

    handleSubmit(event){
        event.preventDefault();

        const url = this.refs.url.value;

        Meteor.call('link.insert', url, (err)=> {
            if(err){
                this.setState({error: 'Enter a valid Url'});
            }else{
                this.setState({error: ''});
                this.refs.url.value = '';
            }
        });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Enter URL</label>
                                <input type="text" ref="url" className="form-control" />
                            </div>
                            <div className="text-danger">{this.state.error}</div>
                            <button className="btn btn-default">Submit</button>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UrlForm;