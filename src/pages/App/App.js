import { Grid } from 'react-bootstrap'
import { Link } from 'react-router'
import React from 'react'

import * as paths from '../../paths'

import Navbar from './Navbar'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Grid>
                    {this.props.children || <Link to={paths.onboarding()}>Get Started</Link>}
                </Grid>
            </div>
        )
    }
}

export default App
