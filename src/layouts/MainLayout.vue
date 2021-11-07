<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Wota</q-toolbar-title>
        <q-space />
        <q-btn flat @click="logout">登出</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

function logout() {
  store.dispatch('auth/logout');
  router.push('/login');
}
</script>

<style></style>
