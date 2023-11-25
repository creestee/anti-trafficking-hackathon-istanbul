import { connect } from 'react-redux';
import Info from '../components/Info';

const mapStateToProps = state => ({
    daysInCharge: state.daysInCharge
});

const Footer = connect(
    mapStateToProps,
)(Info);

export default Footer;
