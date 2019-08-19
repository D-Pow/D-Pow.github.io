import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ title, children, footer, show, onClose }) {
    const [ hideMomentarily, setHideMomentarily ] = useState(false);

    const handleClose = () => {
        // The fade-(in|out) animation relies on the modal being rendered at full screen width/height and then
        // 'show' added/removed accordingly.
        // Because of this, if we simply use the `props.show` value in computing `displayCls` below,
        // the modal will be removed without showing any animation.
        // In order for the user to see the fade-out animation, the 'show' className must be
        // removed *before* the modal is actually removed; thus, delay the actual removal of the
        // modal until after 'show' is removed (i.e. before the size is set to 0).
        setHideMomentarily(true);

        setTimeout(() => {
            onClose();
            setHideMomentarily(false);
        }, 500);
    };

    const displayCls = (show && !hideMomentarily) ? 'show' : '';
    const sizeStyle = show ? '' : '0%';

    return (
        <div className={`modal fade d-block ${displayCls}`}
             style={{
                 // Bootstrap's CSS for the modal backdrop's opacity and size doesn't work correctly. Override it here
                 background: 'rgba(0, 0, 0, 0.7)',
                 width: sizeStyle,
                 height: sizeStyle
             }}
        >
            <div className={'modal-dialog modal-dialog-centered'}>
                <div className={'modal-content'}>

                    <div className={'modal-header'}>
                        <h5 className={'modal-title'}>{title}</h5>
                        <button className={'close'} onClick={handleClose}>
                            <span>&times;</span>
                        </button>
                    </div>

                    <div className={'modal-body'}>
                        {children}
                    </div>

                    {footer && (
                        <div className={'modal-footer'}>
                            {footer}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    footer: PropTypes.node,
    show: PropTypes.bool,
    onClose: PropTypes.func
};

Modal.defaultProps = {
    title: '',
    children: '',
    footer: '',
    show: false,
    onClose: () => {}
};

export default Modal;
