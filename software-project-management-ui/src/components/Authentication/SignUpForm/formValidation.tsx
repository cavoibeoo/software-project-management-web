export const validateFullName = (fullName: string): string => {
	return fullName.trim() ? "" : "Full name is required!";
};

export const validateEmail = (email: string): string => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email) ? "" : "Invalid email!";
};

export const validatePassword = (password: string): string => {
	const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; // Mật khẩu phải có ít nhất 6 ký tự và chứa ký tự đặc biệt
	return passwordPattern.test(password)
		? ""
		: "Password must be at least 6 characters and include special characters!";
};

export const validateConfirmPassword = (
	confirmPassword: string,
	password: string
): string => {
	return confirmPassword === password ? "" : "Password does not match!";
};
