import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

//here shallow renders search for the react component tag 'NavLink'
it("contains 3 NavLinks via shallow", () => {
    const numLinks = shallow(<Header />).find("NavLink").length;
    expect(numLinks).toEqual(3);
});

//mount searches for the final rendered HTML since it generates the final DOM
it('contains 3 anchors via mount', () => {
    const numAnchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find("a").length;

    expect(numAnchors).toEqual(3);
});
