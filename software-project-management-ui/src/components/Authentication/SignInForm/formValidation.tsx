export const validateEmail = (email: string): string => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email) ? "" : "Email không hợp lệ!";
};

export const validatePassword = (password: string): string => {
	const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; // Mật khẩu phải có ít nhất 6 ký tự và chứa ký tự đặc biệt
	return passwordPattern.test(password)
		? ""
		: "Mật khẩu phải có ít nhất 6 ký tự và bao gồm ký tự đặc biệt!";
};
