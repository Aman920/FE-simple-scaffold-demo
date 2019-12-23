import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/actions';

class Home extends Component {
  componentDidMount () {
    this.props.getList();
  }

  render () {
    return (
      <div>
        <Header />
        <h3>hello {this.props.name}</h3>
        <button onClick={() => alert(111)}>click me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.home.name
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getHomeList())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
