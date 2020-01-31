import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/actions';

class Home extends Component {
  componentDidMount () {
    if (this.props.userList.length <= 0) {
      this.props.getList();
    }
  }

  render () {
    const {userList} = this.props;
    return (
      <div>
        <Header />
        {
          userList.map((val, key) => {
            return (
              <p key={key}>{val.name}, {val.desc}</p>
            );
          })
        }
        <button onClick={() => alert(111)}>click me</button>
      </div>
    );
  }
}

// ssr中对外暴露的数据获取方法
Home.loadData = (store) => {
 return store.dispatch(getHomeList())
}

const mapStateToProps = (state) => {
  return {
    userList: state.home.userList
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
