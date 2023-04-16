import { User } from "~/utils/contracts/user";

type UserStore = {
  user: User | null;
};

export const useUserStore = defineStore("user", {
  state: (): UserStore => {
    return {
      user: null,
    };
  },
  actions: {
    async setUser(user: User | null): Promise<void> {
      this.user = user;
    },
  },
});
