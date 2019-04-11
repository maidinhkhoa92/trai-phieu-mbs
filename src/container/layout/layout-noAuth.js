import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from '../../components/common/header';
import Header1 from '../../components/common/header1';
import Header2 from '../../components/common/header2';
import Header3 from '../../components/common/header3';
import Footer from '../../components/common/footer';
// components: First
const header = props => {
  switch (props.type) {
    case 1:
      return <Header1 title={props.title} />;
      break;
    case 2:
      return <Header2 title={props.title} />;
      break;
    case 3:
      return <Header3 title={props.title} />;
      break;
    default:
      return <Header title={props.title} />;
  }
};

header.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string
};

const Layout = props => (
  <Fragment>
    {header(props)}
    <div className="container-fluid vh-100 overflow-hidden">{props.children}</div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);