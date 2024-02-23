import { AuthService } from "./../services/authService";
import { create } from "zustand";

type AuthState = {
  userId: number;
  roleId: number;
  email: string;
  user: any;
  accesToken: string;
  refreshToken: any;
};

type AuthActions = {
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (
    email: string,
    password: string,
    passwordRepeat: string,
    roleId: number
  ) => Promise<void>;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  userId: 0,
  roleId: 0,
  email: "",
  user: {},
  accesToken: "",
  refreshToken: {},
  onLogin: async (email, password) => {
    try {
      const data = await AuthService.login(email, password);
      set({ user: data });
    } catch (error) {
      console.error("Error login:", error);
    }
  },
  onRegister: async (email, password, passwordRepeat, roleId) => {
    try {
      const data = await AuthService.register(
        email,
        password,
        passwordRepeat,
        roleId
      );
      set({ userId: data.userId, email: data.email, roleId: data.roleId });
    } catch (error) {
      console.error("Error register:", error);
    }
  },
}));

export default useAuthStore;