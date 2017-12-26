import reducer from './balance';
import reducer2 from './balance';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        
        test('sets a balance', () => {
            expect(reducer(undefined, { type: constants.SET_BALANCE, balance }))
                .toEqual(balance);
        });
    
        describe('then re-initializing', () => {
            test('reads the balance from cookies', () => {
                expect(reducer2(undefined, {})).toEqual(balance);
            });
        });
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