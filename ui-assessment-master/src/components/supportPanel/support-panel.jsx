import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './support-panel.css';
import '../../app.css'

export const SupportPanel = ({supportName, supportEmail, supportNumber}) => {

    return (
        <div className="SupportPanel">
            <div className="uppercase-letters support-details">your feefo support contact</div>
            <div className="support-content">
                <div className="firstLetter">{supportName.slice(0,1)}</div>
                <div className="support-details">
                    <div className="name">{supportName}</div>
                    <div className="email"><FontAwesomeIcon icon={faEnvelope} /> {supportEmail}</div>
                </div>
                {supportNumber !== undefined && <div role="phone-number" className="number">{supportNumber}</div>}
            </div>
        </div>
    )
};

SupportPanel.propTypes ={
    supportName: PropTypes.string.isRequired,
    supportEmail: PropTypes.string.isRequired,
    supportNumber: PropTypes.string,
};

export default SupportPanel;