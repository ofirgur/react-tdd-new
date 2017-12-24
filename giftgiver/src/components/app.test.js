import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
    const app = shallow(<App />);

    test('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    test('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add-gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        test('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });

        test('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        test('creats a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            test('removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});