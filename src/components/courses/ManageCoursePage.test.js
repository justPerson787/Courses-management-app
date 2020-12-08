import React from 'react';
import { mount } from 'enzyme';
import { authors, newCourse, courses } from '../../../tools/mockData';
import { ManageCoursePage } from './ManageCoursePage'; //{} - -export unconnected component (not default export which is connected)

function render(args) {
    const defaultProps = {
        authors,
        courses,
        history: {},
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,
        match: {}
    };

    const props = { ...defaultProps, ...args };
 //we use mount so the child component is rendered too
    return mount(<ManageCoursePage {...props} />);
}

it ("sets error when attempting to save an empty title field", () => {
    const wrapper = render(); //render form
    wrapper.find("form").simulate("submit"); //simulate its submission
    const error= wrapper.find(".alert").first();//1st error must have class .alert
    expect(error.text()).toBe("Title is required.");
});