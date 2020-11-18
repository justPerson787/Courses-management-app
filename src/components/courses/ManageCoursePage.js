import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class ManageCoursePage extends React.Component {  
    componentDidMount() {
        if (this.props.courses.length === 0) {
            this.props.actions.loadCourses().catch(error => {
                alert("Loading courses failed"+ error);
            });
        }

        if (this.props.authors.length === 0) {
            this.props.actions.loadAuthors().catch(error => {
                alert("Loading authors failed"+ error);
            });
        }
    }
    render() {
        return( 
        <>
            <h2>Manage Course</h2>           
        </>       
        );    
    }
}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses, 
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);