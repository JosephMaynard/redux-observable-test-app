import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchItem } from '../actions/fetch-actions';
import Main from '../components/Main';

const mapStateToProps = ({itemList}) => ({
  ...itemList,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
  fetchItem,
}, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Main);
