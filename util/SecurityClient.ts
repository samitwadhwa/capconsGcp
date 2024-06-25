export const CAPCONS_AUTH_ACCESS_TOKEN = "capcons__access-auth-token";
export const CAPCONS_REFRESH_ACCESS_TOEN = "capcons__refresh-auth-token";

export default class SecurityClient {
  static setAuthAccesstToken(tokenStr: string) {
    localStorage.setItem(CAPCONS_AUTH_ACCESS_TOKEN, tokenStr || "");
  }

  static setAuthRefreshToken(tokenStr: string) {
    localStorage.setItem(CAPCONS_REFRESH_ACCESS_TOEN, tokenStr || "");
  }

  static getAuthRefreshToken() {
    return localStorage.getItem(CAPCONS_REFRESH_ACCESS_TOEN);
  }

  static getAuthAccessToken() {
    return localStorage.getItem(CAPCONS_AUTH_ACCESS_TOKEN);
  }

  static deleteAuthAccessToken() {
    localStorage.removeItem(CAPCONS_AUTH_ACCESS_TOKEN);
  }

  static deleteRefreshToken() {
    localStorage.removeItem(CAPCONS_REFRESH_ACCESS_TOEN);
  }
}
