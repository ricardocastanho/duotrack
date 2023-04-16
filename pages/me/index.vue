<template>
  <h1>Type your username</h1>
  <input v-model="username" type="text" @input="searchUser" />
  <hr />
  <div v-if="user">
    <h2>Nome: {{ user.name }}</h2>
    <p>Ofensiva: {{ user.streak }} dias</p>
  </div>
  <p v-if="pending">Loading...</p>
  <p v-if="error" style="color: red">{{ error }}</p>
</template>

<script setup lang="ts">
import { UserResponse } from "~/utils/contracts/user";

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const username = ref(
  typeof route.query.username === "string" ? route.query.username : ""
);

const getUser = (username: string): Promise<UserResponse> => {
  return $fetch<UserResponse>(
    `https://www.duolingo.com/2017-06-30/users?username=${username}`
  );
};

const searchUser = debounce(async (): Promise<void> => {
  if (!username.value) {
    userStore.setUser(null);
    return;
  }

  router.push({
    query: {
      username: username.value,
    },
  });

  const userResponse = await getUser(username.value);
  userStore.setUser(userResponse?.users?.[0] || null);
}, 500);

const { error, pending } = await useLazyAsyncData<UserResponse | null>(
  async () => {
    if (!username.value) {
      return Promise.resolve(null);
    }

    const res = await getUser(username.value);
    userStore.setUser(res?.users?.[0] || null);
    return res;
  },
  { server: false }
);
</script>
