import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        text: T.string,
      }),
    ).isRequired,
  };

  state = { startIdx: 0 };

  handleNext = () => {
    this.setState(prevState => ({ startIdx: prevState.startIdx + 1 }));
  };

  handleBack = () => {
    this.setState(prevState => ({ startIdx: prevState.startIdx - 1 }));
  };

  render() {
    const { items } = this.props;
    const { startIdx } = this.state;
    const currentItem = items[startIdx];
    return (
      <>
        <Controls
          curPos={startIdx}
          totalPub={items.length}
          onNextClick={this.handleNext}
          onPrevClick={this.handleBack}
        />
        <Counter curPos={startIdx} totalPub={items.length} />
        <Publication currentItem={currentItem} />
      </>
    );
  }
}
