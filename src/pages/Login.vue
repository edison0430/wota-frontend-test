<template>
  <div class="fullscreen flex items-center justify-center">
    <q-card class="q-pa-md login__card">
      <q-card-section class="q-gutter-md">
        <q-input v-model="username" type="text" label="帳號">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input v-model="password" type="password" label="密碼">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </q-card-section>

      <div class="row q-gutter-md q-px-lg">
        <div class="col">
          <q-btn
            class="full-width"
            color="primary"
            label="登入"
            @click="login"
          />
        </div>
        <div class="col">
          <q-btn
            class="full-width"
            color="primary"
            label="重置"
            @click="reset"
          />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');

async function login() {
  if (username.value === '' || password.value === '') {
    showNotify({
      type: 'warning',
      message: 'Please enter your username and password ',
    });
    return;
  }

  try {
    const actionPayload = {
      username: username.value,
      password: password.value,
    };
    await store.dispatch('auth/login', actionPayload);
    router.push('/order');
  } catch (error) {
    let message = error.response?.data?.error || error.message;
    showNotify({ type: 'negative', message });
  }
}

function reset() {
  username.value = '';
  password.value = '';
}

function showNotify({ type = 'positive', position = 'top', message = '' }) {
  $q.notify({
    type,
    position,
    message,
  });
}
</script>

<style scoped lang="scss">
.login {
  &__card {
    width: 80vw;
    max-width: 400px;
  }
}
</style>
