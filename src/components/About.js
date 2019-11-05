import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class About extends Component {

    static propTypes = {
        title: PropTypes.string,
        pagesNumber: PropTypes.number
    }

    render() {
        return (
            <div>
                <h1>The current page is {this.props.title}</h1>
                <h3>Pages: {this.props.pagesNumber}</h3>
            </div>
        )
    }
}
