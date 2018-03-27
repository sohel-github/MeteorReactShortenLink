import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/link';

class LinkList extends Component{

    renderRows(){
        return this.props.links.map(link => {

            const { url, token, clicks } = link;
            const shortLink = `http:localhost:3000/${token}`;

            return(
                <tr key={token}>
                    <td>{url}</td>
                    <td><a target="_blank" href={token}>{shortLink}</a></td>
                    <td>{clicks}</td>
                </tr>
            )
        });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Main URL</th>
                                        <th>Shoten URL</th>
                                        <th>Clicks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createContainer(()=> {
    Meteor.subscribe('links')

    return { links: Links.find({}).fetch() }
}, LinkList);