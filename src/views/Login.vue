<template>
  <v-container>
    <v-snackbar v-model="msg.show" :color="msg.color" top>
      <span>{{ msg.text }}</span>
    </v-snackbar>

    <v-form>
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn class="mr-3" @click="login()" color="green">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      msg: state => state.msg,
      loading: state => state.loading,
    }),
  },
  methods: {
    login() {
      const { username, password } = this;
      this.$store.dispatch('LOGIN', { username, password }).then(() => {
        this.$router.push('/dashboard');
      });
    },
  },
};
</script>
