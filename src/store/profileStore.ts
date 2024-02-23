import { ProfileService } from "./../services/profileService";
import { create } from "zustand";

type Profile = {
  id: number;
  name: string;
  phone: string;
  gender: string;
  birthday: string;
  description: string;
  image: string;
  userId: number;
};

type TestState = {
  profile: Profile | null;
};

type TestActions = {
  getUserProfile: (userId: number) => Promise<void>;
};

const useTestStore = create<TestState & TestActions>((set) => ({
  profile: null,
  getUserProfile: async (userId) => {
    try {
      const data = await ProfileService.getUserProfile(userId);
      set({ profile: data });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  },
}));

export default useTestStore;
