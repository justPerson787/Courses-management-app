import * as courseActions from './CourseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';

describe("createCoursesSuccess", () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
        //arrange
        const course = courses[0];
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        };

        //act
        const action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
    });
});