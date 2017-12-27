import reducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoin reducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index' };

    test('fetches and sets the bitcoin data', () => {
        expect(reducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }))
            .toEqual(bitcoinData);
    });
});
