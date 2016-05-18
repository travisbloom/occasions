import { Grid } from 'react-bootstrap'
import { Link } from 'react-router'
import React from 'react'

import { Row, Col } from '../../components'
import * as paths from '../../paths'

import Navbar from './Navbar'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Grid>
                    <Row>
                        <Col sm={6} smOffset={2}>
                        {this.props.children || <Link to={paths.onboarding()}>Get Started</Link>}
                    </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default App
