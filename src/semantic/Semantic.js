import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Button } from 'semantic-ui-react'
import FixedMenuLayout from './FixedMenuLayout'


const ButtonExampleButton = () => (
  <Button>Click Here</Button>
)

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

class Semantic extends Component {
  //style={{width: 400, margin: 20}}
  render() {
    return (
      <div >
        <FixedMenuLayout />
      </div>
    );
  }
}

export default Semantic;
