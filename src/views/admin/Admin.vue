<template>
<div>
  <v-toolbar>
    <v-toolbar-title>Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn @click="logout()" flat>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>

export default {
  name: 'Dashboard',
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>
