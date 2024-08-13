enum Security{
    easy,
    medium,
    safe
}

class SecurityHelper{
    static ratePassword(password: string): Security {
        // Definizione di criteri per la valutazione
        const minLengthMedium = 8;
        const minLengthSafe = 12;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Valutazione della password
        if (password.length >= minLengthSafe && hasUpperCase && hasDigit && hasSpecialChar) {
            return Security.safe;
        } else if (password.length >= minLengthMedium && (hasUpperCase || hasDigit || hasSpecialChar)) {
            return Security.medium;
        } else {
            return Security.easy;
        }
    }
}

export default SecurityHelper