import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './wallet';

describe('Wallet', () => {
    const props = { balance: 20 };
    const wallet = shallow(<Wallet {...props} />);

    test('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    test('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });
});