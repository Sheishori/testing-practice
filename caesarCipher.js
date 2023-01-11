function caesarCipher(text) {
	let regex = /[a-z]/;
	let array = String(text).toLowerCase().split('');
	let cipher = array.reduce((result, letter) => {
		if (regex.test(letter)) {
			return (result += String.fromCharCode(
				((letter.charCodeAt(0) - 97 + 26 + 1) % 26) + 97
			));
		}
		return (result += letter);
	}, '');

	return cipher;
}

export default caesarCipher;
