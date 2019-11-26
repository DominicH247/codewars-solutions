// You need to write a password generator that meets the following criteria:

// 6 - 20 characters long
// contains at least one lowercase letter
// contains at least one uppercase letter
// contains at least one number
// contains only alphanumeric characters (no special characters)
// Return the random password as a string.

// Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.

function passwordGen() {
    let password = ""
    while (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(password)) {
        password = getPass();
    };

    return password;
};

function getPass() {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNSOPQRSTUVWXYZ0123456789";
    let password = ""
    let passwordLen = Math.floor(Math.random() * (20 - 6 + 1) + 6);
    for (let i = 0; i < passwordLen; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length))
    };

    return password
};