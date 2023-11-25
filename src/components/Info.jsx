import React from 'react';

const Info = ({ daysInCharge, teamName }) =>
    <div className="info">
        <p className="info__days">{daysInCharge} {daysInCharge > 1 ? 'days' : 'day'} as trafficker</p>
    </div>;

Info.propTypes = {
    daysInCharge: React.PropTypes.number.isRequired,
    teamName: React.PropTypes.string.isRequired,
};

export default Info;
