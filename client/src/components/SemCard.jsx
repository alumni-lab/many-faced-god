import React, { Component } from 'react'
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'

import data from '../data/data';

export class SemCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: data.properties,
            property: data.properties[0],
            newFace: false
        }
    }

    nextProperty = () => {
        const currentIndex = this.state.property.index;
        const newIndex = this.state.property.index + 1;

        if (data.properties[newIndex]) {
            this.setState({
                property: data.properties[newIndex]
            })
        } else {
            this.setState({
                property: data.properties[currentIndex],
                newFace: true
            })
        }
    }

    prevProperty = () => {
        let newIndex = 0;
        if (this.state.property.index === 0) {
            newIndex = 0;
        } else {
            newIndex = this.state.property.index - 1;
        }
        this.setState({
            property: data.properties[newIndex],
            newFace: false
        })
    }

    render() {
        return (
            <div>
                {this.state.newFace ? (
                    <Card raised>
                        <Button size='massive'>New Face</Button>
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
                ) : (
                        <Card raised>

                            <Icon name='window close' size='big' corner='top right' onClick={this.props.handleFaceClick} />
                            <Image srcSet={this.state.property.picture} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{this.state.property.header}</Card.Header>
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
                    )
                }

            </div>
        )
    }
}

export default SemCard
