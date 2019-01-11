import { connect } from 'react-redux';
import TagsList from './tags_list';

const mapStateToProps = state => {
  return ({
    tags: state.tags.tags
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    closeTagsDrawer: ownProps.closeTagsDrawer
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsList);
