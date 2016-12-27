import { Navbar } from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    links: [{
      to: '/',
      faClass: 'home'
    },
    {
      to: 'about',
      faClass: 'user-secret'
    },
    {
      to: 'skills',
      faClass: 'code'
    },
    {
      to: 'portfolio',
      faClass: 'picture-o'
    },
    {
      to: 'contact',
      faClass: 'envelope-o'
    }],
    socialLinks: [
      {
        to: 'https://twitter.com/BogdanPolovko',
        faClass: 'twitter'
      },
      {
        to: 'https://www.linkedin.com/in/xpolb01',
        faClass: 'linkedin'
      },
      {
        to: 'https://www.facebook.com/bpolovko',
        faClass: 'facebook'
      }
    ]
  };
};

export default connect(
  mapStateToProps
)(Navbar);
