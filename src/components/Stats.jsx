import React from 'react';
import classNames from 'classnames';
import {MONEY, VISIBILITY, INFLUENCE, QUANTITY, ICON_SIZE, MIN_MAX_ICON_VALUE } from '../constants';

const Stats = ({ currentCard, isPanLeft, isPanRight, stats }) => {
    const isStatChange = (size, stat) => {
        const yesStat = currentCard.yesStats[stat];
        const noStat = currentCard.noStats[stat];

        if (isPanRight && yesStat) {
            return (
                Math.abs(yesStat) <= MIN_MAX_ICON_VALUE && size === 'small') || (Math.abs(yesStat) > MIN_MAX_ICON_VALUE && size === 'big'
            );
        } else if (isPanLeft && noStat) {
            return (
                Math.abs(noStat) <= MIN_MAX_ICON_VALUE && size === 'small') || (Math.abs(noStat) > MIN_MAX_ICON_VALUE && size === 'big'
            );
        }

        return false;
    };

    const getIconSize = icon => ((100 - stats[icon]) / 100) * ICON_SIZE;

    const moneyClass = classNames(
        'stats__change fa fa-circle',
        { 'stats__change--small': isStatChange('small', MONEY) },
        { 'stats__change--big': isStatChange('big', MONEY) },
    );

    const quantityClass = classNames(
        'stats__change fa fa-circle',
        { 'stats__change--small': isStatChange('small', QUANTITY) },
        { 'stats__change--big': isStatChange('big', QUANTITY) },
    );

    const visibilityClass = classNames(
        'stats__change fa fa-circle',
        { 'stats__change--small': isStatChange('small', VISIBILITY) },
        { 'stats__change--big': isStatChange('big', VISIBILITY) },
    );

    const influenceClass = classNames(
        'stats__change fa fa-circle',
        { 'stats__change--small': isStatChange('small', INFLUENCE) },
        { 'stats__change--big': isStatChange('big', INFLUENCE) },
    );

    return (
        <div className="stats">
            <div className="stats__item">
                <i className={visibilityClass} aria-hidden="true" />
                <i className="stats__icon fa fa-eye" aria-hidden="true" />
                <i className="stats__level fa fa-eye" style={{ maxHeight: getIconSize(VISIBILITY) }} aria-hidden="true" />
            </div>
            <div className="stats__item">
                <i className={quantityClass} aria-hidden="true" />
                <i className="stats__icon fa fa-users" aria-hidden="true" />
                <i className="stats__level fa fa-users" style={{ maxHeight: getIconSize(QUANTITY) }} aria-hidden="true" />
            </div>
            <div className="stats__item">
                <i className={moneyClass} aria-hidden="true" />
                <i className="stats__icon fa fa-usd" aria-hidden="true" />
                <i className="stats__level fa fa-usd" style={{ maxHeight: getIconSize(MONEY) }} aria-hidden="true" />
            </div>
            <div className="stats__item">
                <i className={influenceClass} aria-hidden="true" />
                <i className="stats__icon fa fa-shield" aria-hidden="true" />
                <i className="stats__level fa fa-shield" style={{ maxHeight: getIconSize(INFLUENCE) }} aria-hidden="true" />
            </div>
        </div>
    );
};

Stats.propTypes = {
    currentCard: React.PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        image: React.PropTypes.string,
        yesText: React.PropTypes.string,
        yesStats: React.PropTypes.arrayOf(React.PropTypes.number),
        noText: React.PropTypes.string,
        noStats: React.PropTypes.arrayOf(React.PropTypes.number),
    }).isRequired,
    isPanLeft: React.PropTypes.bool.isRequired,
    isPanRight: React.PropTypes.bool.isRequired,
    stats: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

export default Stats;
