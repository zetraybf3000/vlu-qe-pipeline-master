const { login } = require("./auth");

describe("Regression Test - login()", () => {
  test("Mật khẩu sai phải throw exception", () => {
    expect(() => login("admin", "wrong")).toThrow("Mật khẩu không đúng");
  });

  test("Username rỗng phải throw exception", () => {
    expect(() => login("", "123")).toThrow("Username không được để trống");
  });

  test("Username chỉ chứa khoảng trắng phải throw exception", () => {
    expect(() => login("   ", "123")).toThrow(
      "Username không được để trống"
    );
  });

  test("Mật khẩu rỗng phải throw exception", () => {
    expect(() => login("admin", "")).toThrow(
      "Password không được để trống"
    );
  });

  test("Mật khẩu chứa ký tự đặc biệt phải throw exception", () => {
    expect(() => login("admin", "123@")).toThrow(
      "Mật khẩu không đúng"
    );
  });

  test("Tài khoản bị khóa phải throw exception", () => {
    expect(() => login("locked", "123")).toThrow(
      "Tài khoản đã bị khóa"
    );
  });

  test("Username không phải admin trả về false khi password hợp lệ", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("Password null phải throw exception", () => {
    expect(() => login("admin", null)).toThrow(
      "Password không được để trống"
    );
  });

  test("Password undefined phải throw exception", () => {
    expect(() => login("admin", undefined)).toThrow(
      "Password không được để trống"
    );
  });
});
