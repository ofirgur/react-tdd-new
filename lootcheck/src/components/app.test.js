import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
    const app = shallow(<App />);

    test('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    test('contains a connected Wallet component', () => {
        //console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    test('contains a connected Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });

    test('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });
});