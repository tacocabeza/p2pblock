import React,{Component} from "react";
import {Modal, ModalHeader, ModalFooter, ModalBody, Input, Button} from "reactstrap";

export default class Chat extends Component{

    constructor(props) {
        super(props);

        this.state={
            isMessagePopup: this.props.isMessagePopup,
        }
    }

    render() {
        return(

            this.renderChatBox()
        )
    }

    renderChatBox(){

        return(

            <Modal  className="vertical-center" isOpen={this.props.isMessagePopup} toggle={() => this.toggleModal()}>
                <div>


                    <ModalHeader>
                        Chat
                    </ModalHeader>

                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>

                        <Button variant="contained" color="primary">Send</Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }

    toggleModal(){
        this.setState({isMessagePopup: !this.state.isMessagePopup});
    }


}