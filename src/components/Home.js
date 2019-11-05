import React from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
    return (
        <div>
            <h1>This is the {props.title} page</h1>
            <h3>Pages: {props.pagesNumber}</h3>
            <h3>Today is {props.today}</h3>
            <button onClick = {props.productFunc}>Add item</button>
        </div>
    )
}

Home.propTypes = {
    title: PropTypes.string,
    pagesNumber: PropTypes.number
}

Home.defaultProps = {
    title: "About"
}