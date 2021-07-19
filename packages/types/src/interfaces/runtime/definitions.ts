import definitions from '@polkadot/types/interfaces/runtime/definitions';
import { Definitions } from '@polkadot/types/types';
import runtime from '@parallel-js/type-definitions/runtime';

export default {
    rpc: {},
    types: {
        ...definitions.types,
        ...runtime.types
    }
} as Definitions;
