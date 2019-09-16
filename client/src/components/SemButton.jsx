import React, { Component } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import SemCard from './SemCard'

export class SemButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFaces: false
        };
    };

    handleFaceClick = () => {
        this.setState({
            showFaces: !this.state.showFaces
        });
    };


    render() {
        return (
            <div>
                {this.state.showFaces ?
                    (
                        <Button as='div' labelPosition='right'>
                            <Button icon>
                                <Icon name='user' />
                                Faces
                            </Button>
                            
                            <Label as='a' basic pointing='left'>
                                <SemCard handleFaceClick={this.handleFaceClick}/>
                            </Label>
                        </Button>
                    )
                    :
                    (<Button onClick={this.handleFaceClick}>
                        <Icon name='user' />
                        Show Faces
                    </Button>)
                }
                {/* <Button animated='vertical'>
                    <Button.Content hidden>Faces</Button.Content>
                    <Button.Content visible>
                        <Icon name='user'/>
                    </Button.Content>
                </Button> */}
                {/* <SemCard /> */}

            </div>
        )
    }
}

export default SemButton
