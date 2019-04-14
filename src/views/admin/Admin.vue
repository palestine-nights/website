<template>
  <v-content>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-badge color="orange" overlap>
        <span class="caption" slot="badge">{{ pending }}</span>
        <v-icon class="green--text">notifications_active</v-icon>
      </v-badge>
      <v-toolbar-items>
        <v-btn @click="logout()" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-toolbar flat>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon>person</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Administrator</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="drawer = !drawer">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0">
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :href="item.link">
          <v-list-tile-action :href="item.link" class="my-1">
            <v-icon size="30px" class="green--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content class="my-1">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Tables',
          icon: 'room',
          link: '/admin/tables',
        },
        {
          title: 'Menu',
          icon: 'restaurant',
          link: '/admin/menu',
        },
      ],
      mini: true,
      right: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>
