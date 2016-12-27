'use strict';
import React from 'react';
import {Link} from 'react-router';

export const Navbar = ({links}) => {
  return (
    <section id="navigation">
      <a className="logo">
        <img src="https://jacekjeznach.com/wp-content/themes/jj/img/logo.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo" />
        <img src="https://jacekjeznach.com/wp-content/themes/jj/img/logo_sub.png" alt="Wordpress Developer, Web Developer , Front End Developer" />
      </a>
      <nav>
        {
          links && links.map( (link, index) => {
            return <Link key={index} to={`/${link.to}`}><i className={`fa fa-${link.faClass}`}></i></Link>
          })
        }
      </nav>
      <ul>
        {

        }
      </ul>
    </section>
  );
}
