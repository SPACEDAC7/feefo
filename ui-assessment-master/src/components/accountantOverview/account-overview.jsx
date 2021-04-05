import React from 'react';
import SalesPanel from "../salesPanel/sales-panel";
import SupportPanel from "../supportPanel/support-panel";
import PropTypes from 'prop-types';

import './account-overview.css';

export const AccountOverview = ({data}) => {
    const {supportContact, salesOverview} = data;

    return (
        <div className="AccountOverview">
            <div className="row">
                <div role="banner" className="title">Account Overview</div>
                <SupportPanel supportEmail={supportContact.email}
                              supportName={supportContact.name}
                              supportNumber={supportContact.number}/>
            </div>
            <div className="row">
                <SalesPanel lastUploadDate={salesOverview.lastUploadDate}
                            linesAttempted={salesOverview.linesAttempted}
                            linesSaved={salesOverview.linesSaved}
                            successfulUploads={salesOverview.successfulUploads}
                            uploads={salesOverview.uploads}/>
            </div>
        </div>
    )
};

AccountOverview.propTypes ={
    data: PropTypes.object.isRequired,
};


export default AccountOverview;