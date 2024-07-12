import React, { Component } from 'react';

class textComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Heading Display by using react</h1>
        <p style={{ color: 'gray', fontSize: '19px', textAlign: 'left', margin: '9px' }}>
          India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy.
        </p>
      </div>
    );
  }
}

export default textComponent;
