<template>
  <v-container>
    <v-snackbar v-model="msg.show" :color="msg.color" top>
      <span>{{ msg.text }}</span>
    </v-snackbar>

    <h2 class="text-xs-center green--text display-1 my-5">
      Administrator
    </h2>

    <v-layout fill-height row wrap class="justify-center text-xs-center">
      <v-flex xs12 sm8 md8>
         <v-text-field solo
          v-model="username"
          append-icon="person"
          :rules="[rules.required]"
          label="Username"
          counter
        ></v-text-field>

        <v-text-field solo
          v-model="password"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :rules="[rules.required]"
          :type="show ? 'text' : 'password'"
          label="Password"
          counter
          @click:append="show = !show"
        ></v-text-field>

        <v-btn @click="login()" round large color="green">Sign In</v-btn>
      </v-flex>
    </v-layout>
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
      show: false,
      rules: {
        required: value => !!value || 'Field is required.',
      },
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
        this.$router.push('/admin/reservations');
      });
    },
  },
};
</script>
