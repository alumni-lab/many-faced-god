import React, { Component } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import SemCard from './SemCard'

export class SemButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFaces: false,
            cardPositioning: this.props.divPositioning
        };
    };

    handleFaceClick = () => {
        let positioning = {
            top: this.props.divPositioning['top'] + 100,
            left: this.props.divPositioning['left'] - 125,
            height: this.props.divPositioning['height'],
            width: this.props.divPositioning['width']
        };

        this.setState({
            showFaces: !this.state.showFaces,
            cardPositioning: positioning
        });
    };

    handleClose = () => {
        this.setState({
            showFaces: !this.state.showFaces
        })
    }

    // Have only one card show up at a time

    render() {
        return (
            <div>
                {this.state.showFaces ?
                    (
                        <div
                            className="face"
                            style={this.state.cardPositioning}
                            key={this.props.faceCoordinates._x}
                        >
                            <Label as='a' basic pointing='above'>
                                <SemCard handleFaceClick={this.handleClose} />
                            </Label>
                        </div>
                    )
                    :
                    (
                        <div
                            className="face"
                            style={this.props.divPositioning}
                            key={this.props.faceCoordinates._x}
                            onClick={this.handleFaceClick}
                        >
                        </div>
                    )
                }

            </div>
        )
    }
}

export default SemButton
