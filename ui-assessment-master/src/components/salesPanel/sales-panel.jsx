import React from 'react';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import './sales-panel.css';
import '../../app.css'


export const SalesPanel = ({lastUploadDate, linesAttempted, linesSaved, successfulUploads, uploads}) => {
    const percentageUploads = successfulUploads * 100 / uploads;
    const percentageLines = linesSaved * 100 / linesAttempted;

    return (
        <div className="salesPanel">
            <div className="row-no-separation sales-padding">
                <div className="bold">
                    <FontAwesomeIcon className="upload-icon" icon={faUpload} /> Sales</div>
                <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
            </div>
            <div role="contentinfo" className="sales-padding">You had <span className="bold">{successfulUploads} uploads</span> and <span className="bold">{linesSaved}</span> lines added.</div>
            <div className="percentage-section">
                <div className="percentage-element">
                    <div role="percentageUpload" className="big-green">{percentageUploads > 100 ? 100 : percentageUploads}%</div>
                    <div className="uppercase-letters"> UPLOAD SUCCESS</div>
                </div>
                <div className="percentage-element">
                    <div role="percentageLines" className="big-green">{percentageLines > 100 ? 100 : percentageLines}%</div>
                    <div className="uppercase-letters"> LINES SAVED</div>
                </div>
            </div>
        </div>
    )
}

SalesPanel.propTypes ={
    lastUploadDate: PropTypes.number,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    uploads: PropTypes.number.isRequired,
};

export default SalesPanel;