function analyzeArray(array) {
	const min = Math.min(...array);
	const max = Math.max(...array);
	const length = array.length;
	const average = array.reduce((sum, current) => sum + current, 0) / length;
	return { average, min, max, length };
}

export default analyzeArray;
