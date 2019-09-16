import React, { Component } from 'react'
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import Matthew from '../img/matthew.png';
import Daniel from '../img/daniel.jpg';
import Elliot from '../img/elliot.jpg';

import data from './data/data';

export class SemCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render() {

        const { properties, property } = this.state;

        return (
            <div>
                <Card raised>
                    <Icon name='window close' size='big' corner='top right' onClick={this.props.handleFaceClick} />
                    <Image srcSet={Matthew} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Current</Card.Header>
                        {/* <Card.Meta>
                            <span className='date'>Data/Information</span>
                        </Card.Meta>
                        <Card.Description>
                            Description about current face
                        </Card.Description> */}
                    </Card.Content>

                    <Card.Content extra>
                        <a>
                            <Button.Group>
                                <Button animated='fade' onClick={() => this.prevProperty()}>
                                    <Button.Content hidden>
                                        Prev
                                    </Button.Content>
                                    <Button.Content visible>
                                        <Icon name='left chevron' />
                                    </Button.Content>
                                </Button>
                                <Button animated='fade' onClick={() => this.nextProperty()}>
                                    <Button.Content hidden>
                                        Next
                                    </Button.Content>
                                    <Button.Content visible>
                                        <Icon name='right chevron' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </a>
                    </Card.Content>

                </Card>
            </div>
        )
    }
}

export default SemCard
