import groupBy from 'lodash.groupby';
import mapValues from 'lodash.mapvalues';

export default function nestedGroupBy(seq, keys) {
	if (!keys.length) {
		return seq;
	}
	const first = keys[0];
	const rest = keys.slice(1);
	return mapValues(groupBy(seq, first), function (value) {
		return nest(value, rest);
	});
};