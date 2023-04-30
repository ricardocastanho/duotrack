<template>
  <h1>Duotrack</h1>
  <h3>Type your username</h3>
  <input v-model="username" type="text" @input="searchUser" />
  <hr />
  <div v-if="user">
    <h2>Id: {{ user.id }}</h2>
    <h2>Nome: {{ user.name }}</h2>
    <p>Ofensiva: {{ user.streak }} dias</p>
  </div>
  <div>
    <ul v-for="xp in xpSummary" :key="xp.date">
      <li>{{ xp.gainedXp }} xp</li>
      <li>{{ xp.numSessions }} atividades realizadas</li>
    </ul>
  </div>
  <p v-if="pending">Loading...</p>
  <p v-if="error" style="color: red">{{ error }}</p>
</template>

<script setup lang="ts">
import { User, UserResponse } from "~/utils/contracts/user";
import { XpSummary } from "~/utils/contracts/xp";

const route = useRoute();
const router = useRouter();

const user = ref<User | null>(null);
const xpSummary = ref<XpSummary[] | null>(null);
const username = ref<string>(
  typeof route.query.username === "string" ? route.query.username : ""
);

const { error, pending } = await useLazyAsyncData<UserResponse | null>(
  async () => {
    if (!username.value) {
      return Promise.resolve(null);
    }

    const data = await fetchUser(username.value);
    user.value = data.users[0];
    return data;
  },
  { server: false }
);

watch(user, async (u) => {
  if (!u) {
    return;
  }

  const data = await fetchXpSummaries(u.id);
  xpSummary.value = data.summaries;
});

const searchUser = debounce(async (): Promise<void> => {
  if (!username.value) {
    return;
  }

  router.push({
    query: {
      username: username.value,
    },
  });

  const data = await fetchUser(username.value);
  user.value = data.users[0];
}, 500);
</script>
