import { Navbar } from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    links: ['home', 'about', 'skills', 'contact']
  };
};

export default connect(
  mapStateToProps
)(Navbar);
