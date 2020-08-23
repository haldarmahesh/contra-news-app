import React from 'react';
import { connect } from "react-redux"
function App(props: any) {
  console.log('>>', props);
  return (
    <div className="App">
    <div>Count: {props.count}</div>
    
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
