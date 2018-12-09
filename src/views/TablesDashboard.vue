<template>
  <v-container>
    <v-snackbar v-model="msg.show" :color="msg.color" top>
      <span>{{ msg.text }}</span>
      <!-- <v-btn flat @click="this.$tablesStore.$store.commit('tablesStore/CLOSE_MSG')">Close</v-btn> -->
    </v-snackbar>

    <h1 class="font-weight-light">Tables</h1>

    <v-content>
      <v-form ref="form">
        <v-layout row wrap>
          <v-flex xs12 sm12 md5>
            <v-text-field
              label="Description"
              prepend-icon="description"
              v-model="description"
              color="green"
              class="mr-3"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm10 md6>
            <v-slider
              label="Number Of Seats"
              prepend-icon="event_seat"
              v-model="places"
              color="green"
              class="mr-3"
              min="0"
              max="20"
              thumb-label
            ></v-slider>
          </v-flex>

        <v-flex xs12 sm2 md1 class="text-xs-center">
          <v-btn class="mr-3" color="green" @click="createTable">Create</v-btn>
        </v-flex>
         </v-layout>
      </v-form>
    </v-content>

    <v-content v-if="!loading && tables.length > 0">
      <v-flex v-for="(table,id) in tables" :key="id">
        <v-card class="my-1">
          <v-card-text>
            <v-layout>
              <v-flex xs2 sm1 md1>
                <span class="display-1 font-weight-light white--text">{{ table.id }}</span>
              </v-flex>

              <v-flex xs2 sm1 md1>
                <v-badge color="green" overlap>
                  <span slot="badge">{{ table.places }}</span>
                  <v-icon color="white" large>event_seat</v-icon>
                </v-badge>
              </v-flex>

              <v-flex xs6 sm8 md8>
                  <v-icon color="green" class="mr-2" small>description</v-icon>
                  <span class="font-weight-light">{{ table.description }}</span>
              </v-flex>

              <v-flex xs2 sm2 md2 class="text-xs-right">
                <v-btn flat icon color="red" @click="deleteTable(id, table.id)">
                  <v-icon>clear</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-content>

    <v-layout column align-center v-else-if="loading">
      <v-progress-circular :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TablesDashboard',

  data() {
    return {
      description: '',
      places: 0,
    };
  },
  mounted() {
    this.$store.dispatch('tablesStore/GET_TABLES');
  },
  computed: {
    ...mapState({
      tables: state => state.tablesStore.tables,
      table: state => state.tablesStore.table,
      msg: state => state.tablesStore.msg,
      loading: state => state.tablesStore.loading,
    }),
  },

  methods: {
    createTable() {
      this.$store.dispatch('tablesStore/CREATE_TABLE', {
        description: this.description,
        places: this.places,
      });
    },
    deleteTable(i, ID) {
      this.$store.dispatch('tablesStore/DELETE_TABLE', ID);
    },
  },
};
</script>
