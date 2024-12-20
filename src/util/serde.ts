// https://github.com/mermaid-js/mermaid-live-editor/blob/939ef8b56eff362a1fcd3e2154142974f8e1a7a3/src/lib/util/serde.ts
import { deflate, inflate } from 'pako';
import { toUint8Array, fromUint8Array, toBase64, fromBase64 } from 'js-base64';
import type { State } from './types.js';

interface Serde {
  serialize: (state: string) => string;
  deserialize: (state: string) => string;
}

const base64Serde: Serde = {
  serialize: (state: string): string => {
    return toBase64(state, true);
  },
  deserialize: (state: string): string => {
    return fromBase64(state);
  }
};

export const pakoSerde: Serde = {
  serialize: (state: string): string => {
    const data = new TextEncoder().encode(state);
    const compressed = deflate(data, { level: 9 });
    return fromUint8Array(compressed, true);
  },
  deserialize: (state: string): string => {
    const data = toUint8Array(state);
    return inflate(data, { to: 'string' });
  }
};

export type SerdeType = 'base64' | 'pako';

const serdes: { [key in SerdeType]: Serde } = {
  base64: base64Serde,
  pako: pakoSerde
};

export const serializeState = (state: State, serde: SerdeType = 'pako'): string => {
  if (!(serde in serdes)) {
    throw new Error(`Unknown serde type: ${serde}`);
  }
  const json = JSON.stringify(state);
  const serialized = serdes[serde].serialize(json);
  return `${serde}:${serialized}`;
};

export const deserializeState = (state: string): State => {
  let type: SerdeType, serialized: string;
  if (state.includes(':')) {
    let tempType: string;
    [tempType, serialized] = state.split(':');
    if (tempType in serdes) {
      type = tempType as SerdeType;
    } else {
      throw new Error(`Unknown serde type: ${tempType}`);
    }
  } else {
    type = 'base64';
    serialized = state;
  }
  const json = serdes[type].deserialize(serialized);
  return JSON.parse(json) as State;
};