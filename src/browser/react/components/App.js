'use strict';
import React, { Component } from 'react';
import NavbarContainer from '../containers/NavbarContainer';


export const App = (props) => (
  <div>
    <NavbarContainer />
    <div id="main" className="container-fluid">
        <div className="col-xs-12">
          This is main
        </div>
    </div>
  </div>
);
