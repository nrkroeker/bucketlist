import React from 'react';
// import { IonPage } from "@ionic/react";

import {lists} from '../dummydata';

class List extends React.Component {
  render() {
    let list = lists[this.props.match.params.index];

    return (
      <p>{list.name}</p>
    )
  }
}

export default List