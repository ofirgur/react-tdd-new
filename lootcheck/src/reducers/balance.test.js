import reducer from './balance';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
    test('sets a balance', () => {
        const balance = 10;

        expect(reducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance);
    });

    test('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(reducer(initialState, { type: constants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
    });

    test('withraw from the balance', () => {
        const withdrawal = 5;
        const initialState = 10;

        expect(reducer(initialState, { type: constants.WITHDRAW, withdrawal }))
            .toEqual(initialState - withdrawal);
    });
});