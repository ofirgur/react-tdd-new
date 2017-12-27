import rootReducer from './index';

describe('rootReducer', () => {
    test('initializes the default states', () => {
        // initial states, incomming action
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
    });
});