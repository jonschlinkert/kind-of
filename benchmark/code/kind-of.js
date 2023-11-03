import typeOf from '../../index.js';

export default function(val) {
  if (val === 'arguments') {
    return typeOf(arguments);
  }
  return typeOf(val);
};
