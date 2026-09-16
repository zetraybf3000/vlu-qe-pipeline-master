/*lab02*/
function login(username, password) {
  if (!username || username.trim() === "") {
    throw new Error("Username không được để trống");
  }

  if (password === undefined || password === null || password === "") {
    throw new Error("Password không được để trống");
  }

  if (password !== "123") {
    throw new Error("Mật khẩu không đúng");
  }

  if (username === "locked") {
    throw new Error("Tài khoản đã bị khóa");
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    throw new Error("Mật khẩu chứa ký tự đặc biệt");
  }

  return username === "admin";
}

module.exports = { login };
