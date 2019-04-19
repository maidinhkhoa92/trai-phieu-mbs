import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import Card from 'components/account/card';
import accountActions from 'store/account/actions';
import bondsActions from 'store/bonds/actions';
import history from 'utils/history';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1,
      order: 0
    });
  }
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
    history.push({ pathname: '/buy/info/' });
  };
  render() {
    return (
      <Layout type={2} title="TRÁI PHIẾU NẮM GIỮ">
        <h3 className="text-right mt-3 mb-3">
          Tổng giá trị đầu tư: {currency(this.props.total)} VNĐ
        </h3>
        {_.map(this.props.bonds, (item, index) => (
          <Card onDetail={this._onDetail} item={item} key={index} />
        ))}
        {this.props.bonds === null ||
          (this.props.bonds.length === 0 && (
            <div className="text-center">
              <h1>Không có Trái phiếu nào</h1>
            </div>
          ))}
      </Layout>
    );
  }
}

List.propTypes = {
  getList: PropTypes.func,
  bonds: PropTypes.array,
  getTotal: PropTypes.func,
  bondsDetail: PropTypes.func,
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Account.list,
    total: state.Account.total
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  getList: accountActions.list,
  getTotal: accountActions.info
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
