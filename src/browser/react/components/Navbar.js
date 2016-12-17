'use strict';
import React from 'react';
import {Link} from 'react-router';

export const Navbar = ({links}) => {
  return (
    <section id="navigation">
      Hello from NAVI
      <nav>
        {
          links && links.map( (link, index) => {
            return <Link key={index} to={`/${link}`}>{link.toUpperCase()}</Link>
          })
        }
      </nav>
    </section>
  );
}
