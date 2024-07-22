// Shamelessly stolen from: https://gist.github.com/mathiasbynens/5670917

// Here’s a 100% deterministic alternative to `Math.random`. Google’s V8 and
// Octane benchmark suites use this to ensure predictable results.

// "Static" object that stores a seed on initialization and exposes function to generate a deterministic
// random value.
const Deterministic = (() => {
	const seed = Date.now();

	function random() {
		this.seed = ((this.seed + 0x7ED55D16) + (this.seed << 12))  & 0xFFFFFFFF;
		this.seed = ((this.seed ^ 0xC761C23C) ^ (this.seed >>> 19)) & 0xFFFFFFFF;
		this.seed = ((this.seed + 0x165667B1) + (this.seed << 5))   & 0xFFFFFFFF;
		this.seed = ((this.seed + 0xD3A2646C) ^ (this.seed << 9))   & 0xFFFFFFFF;
		this.seed = ((this.seed + 0xFD7046C5) + (this.seed << 3))   & 0xFFFFFFFF;
		this.seed = ((this.seed ^ 0xB55A4F09) ^ (this.seed >>> 16)) & 0xFFFFFFFF;
		return (this.seed & 0xFFFFFFF) / 0x10000000;
	}

	return { random: random }
})();

export default Deterministic;
