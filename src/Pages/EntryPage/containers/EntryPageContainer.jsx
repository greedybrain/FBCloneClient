import React, { Component } from 'react'
import HeaderContainer from './HeaderContainer'
import Signup from '../components/Signup'

export default class EntryPageContainer extends Component {
    render() {
        return (
            <div className="entry-page-wrapper">
                <HeaderContainer />
                <Signup />
            </div>
        )
    }
}
