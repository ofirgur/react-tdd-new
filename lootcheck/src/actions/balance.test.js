import * as constants from './constants';
import * as actions from './balance';

test('creates an action to set the balance', () => {
    const balance = 0;

    const expectedAction = { type: constants.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

test('creates an action to deposite into the balance', () => {
    const deposit = 10;

    const expectedAction = { type: constants.DEPOSIT, deposit };

    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

test('creates an action to withdraw from the balance', () => {
    const withdrawal = 5;

    const expectedAction = { type: constants.WITHDRAW, withdrawal };

    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});


