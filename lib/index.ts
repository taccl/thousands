export function thousands (
	n?: number | string, // number
	s?: string // separator
): string {
	const p = ((n || n === 0 ? n : '') + '').split('.');
	if (p.length) {
		p[0] = p[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1' + (s || ','));
	}
	return p.join('.');
};
