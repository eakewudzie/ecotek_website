// Simple auth utility functions
export const AUTH_CODE = "admin123";

export function checkAuthCode(code: string): boolean {
  return code === AUTH_CODE;
}

export function setAuthStatus(isAuthenticated: boolean): void {
  if (typeof window !== "undefined") {
    if (isAuthenticated) {
      localStorage.setItem("admin_authenticated", "true");
    } else {
      localStorage.removeItem("admin_authenticated");
    }
  }
}

export function getAuthStatus(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_authenticated") === "true";
  }
  return false;
}
