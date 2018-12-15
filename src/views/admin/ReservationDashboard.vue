<template>
  <v-content>
    <v-tabs v-model="tabModel" color="grey darken-4" grow>
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab v-for="(tab, id) in tabs" :key="id">{{ tab.title }}</v-tab>
    </v-tabs>

    <v-container>
      <v-tabs-items v-model="tabModel">
        <v-tab-item v-for="(tab, id) in tabs" :key="id">
          <v-content v-if="listOfReservations(id).length > 0">
            <v-card class="mb-1" v-for="(reservation,id) in listOfReservations(id)" :key="id">
              <v-card-text>
                <v-layout>
                  <v-flex sm1 md1 hidden-sm-only text-xs-left>
                    <div>
                      <span class="display-1 font-weight-thin grey--text">
                        {{ reservation.id }}
                      </span>
                    </div>
                  </v-flex>

                  <v-flex xs3 sm1 md2 text-xs-center text-sm-left>
                    <v-badge color="green" overlap>
                      <span slot="badge">{{ reservation.guests }}</span>
                      <v-icon color="grey lighten-1" large>account_circle</v-icon>
                    </v-badge>
                  </v-flex>

                  <v-flex hidden-xs-only sm5 md4>
                    <div>
                      <v-icon color="green" class="mr-2" small>email</v-icon>
                      <strong class="mr-1">Email:</strong>
                      <span class="font-weight-light">{{ reservation.email }}</span>
                    </div>
                    <div>
                      <v-icon color="green" class="mr-2" small>phone</v-icon>
                      <strong class="mr-1">Phone:</strong>
                      <span class="font-weight-light">{{ reservation.phone }}</span>
                    </div>
                    <div>
                      <v-icon color="green" class="mr-2" small>person</v-icon>
                      <strong class="mr-1">Full Name:</strong>
                      <span class="font-weight-light">{{ reservation.full_name }}</span>
                    </div>
                  </v-flex>

                  <v-flex xs8 sm4 md3>
                    <div>
                      <v-icon color="green" class="mr-2" small>access_time</v-icon>
                      <strong class="mr-1">Time:</strong>
                      <span class="green--text mr-5">
                        {{ reservation.time | moment("timezone", "Asia/Bahrain", "h:mm:ss") }}
                      </span>
                    </div>
                    <div>
                      <v-icon color="green" class="mr-2" small>calendar_today</v-icon>
                      <strong class="mr-1">Date:</strong>
                      <span class="font-weight-light">
                        {{ reservation.time | moment("timezone", "Asia/Bahrain", "DD.MM.YYYY") }}
                      </span>
                    </div>
                    <div>
                      <v-icon color="green" class="mr-2" small>timeline</v-icon>
                      <strong class="mr-1">Duration:</strong>
                      <span class="font-weight-light">
                        {{ reservation.duration / 1000000 | duration('humanize') }}
                      </span>
                    </div>
                  </v-flex>

                  <v-flex xs2 sm2 md2>
                    <v-btn v-if="isCancelled(reservation.state)" disabled flat icon color="grey">
                      <v-icon>clear</v-icon>
                    </v-btn>
                    <v-btn v-else flat icon color="red" @click="cancel(reservation)">
                      <v-icon>clear</v-icon>
                    </v-btn>

                    <v-btn v-if="isApproved(reservation.state)" disabled flat icon color="grey">
                      <v-icon>done</v-icon>
                    </v-btn>
                    <v-btn v-else flat icon color="green" @click="approve(reservation)">
                      <v-icon>done</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-content>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ReservationDashboard',
  computed: {
    ...mapState({
      reservations: state => state.reservationsStore.reservations,
    }),
  },
  methods: {
    approve(reservation) {
      this.$store
        .dispatch('reservationsStore/APPROVE', reservation.id)
        .then(() => {
          this.$store.dispatch('reservationsStore/GET_RESERVATIONS');
        });
    },
    cancel(reservation) {
      this.$store
        .dispatch('reservationsStore/CANCEL', reservation.id)
        .then(() => {
          this.$store.dispatch('reservationsStore/GET_RESERVATIONS');
        });
    },
    listOfReservations(ID) {
      switch (ID) {
        case 0:
          return this.reservations.filter(reservation => reservation.state === 'approved');
        case 1:
          return this.reservations.filter(reservation => new Date(reservation.time) >= Date.now());
        case 2:
          return this.reservations.filter(reservation => reservation.state === 'created');
        case 3:
          return this.reservations.filter(reservation => new Date(reservation.time) < Date.now());
        default:
          return [];
      }
    },
    isCancelled(obj) {
      return obj === 'cancelled';
    },
    isCreated(obj) {
      return obj === 'created';
    },
    isApproved(obj) {
      return obj === 'approved';
    },
  },
  data() {
    return {
      tabModel: null,
      tabs: [
        {
          title: 'Done',
        },
        {
          title: 'Future',
        },
        {
          title: 'Pending',
        },
        {
          title: 'History',
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch('reservationsStore/GET_RESERVATIONS');
  },
};
</script>
