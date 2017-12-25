import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './wallet';

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };  
    const wallet = shallow(<Wallet {...props} />);

    test('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    test('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    test('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when typing into the wallet input', () => {
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', { target: { value: userBalance } });
        });

        test('updates the local balance in `state` and convert it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('and the user wants to make deposit', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            });
    
            test('dispatches the `deposit()` it receives from props with the local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

        describe('and the user wants to make withdraw', () => {
            beforeEach(() => {
                wallet.find('.btn-withdraw').simulate('click');
            });
    
            test('dispatches the `withdraw()` it receives from props with the local balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

    });
});