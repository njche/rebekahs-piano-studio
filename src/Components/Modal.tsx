
function Modal(_props: { open: Boolean, success: Boolean, completed: Boolean }) {
    if (!_props.open) {
        return null
    }

    if (_props.completed === false) {
        return (
            <div className="Modal">
                <div className="Modal-wrapper-failed">
                    <p className="Modal-text">
                        Please fill out form!
                    </p>
                </div>
            </div>
        )
    }

    if (_props.success === true) {
        return (
            <div className="Modal">
                <div className="Modal-wrapper-success">
                    <p className="Modal-text">
                        Message was sent!
                    </p>
                </div>
            </div>
        )
    }

    if (!_props.success === false) {
        return (
            <div className="Modal">
                <div className="Modal-wrapper-failed">
                    <p className="Modal-text">
                        There was an error proccessing message!
                    </p>
                </div>
            </div>
        )
    }

    return (
        <></>
    )
}

export default Modal