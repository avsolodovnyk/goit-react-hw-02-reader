import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

export default class Reader extends Component {
  static defaultProps = {};

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

  handleNext = e => {
    this.setState(prevState => ({ startIdx: prevState.startIdx + 1 }));
  };

  handleBack = e => {
    this.setState(prevState => {
      return { startIdx: prevState.startIdx - 1 };
    });
  };

  render() {
    const { items } = this.props;
    const { startIdx } = this.state;
    return (
      <div className="reader">
        <Controls
          curPos={startIdx}
          totalPub={items.length}
          onNextClick={this.handleNext}
          onPrevClick={this.handleBack}
        />
        <Counter curPos={startIdx} totalPub={items.length} />
        <Publication
          id={items[startIdx].id}
          title={items[startIdx].title}
          text={items[startIdx].text}
        />
      </div>
    );
  }
}
