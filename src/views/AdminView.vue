<template>
  <v-container>
    <h1 class="font-weight-light">Reservations</h1>

    <v-content v-if="!loading && reservations.length > 0">
      <v-flex v-for="(reservation,id) in reservations" :key="id">
        <v-card class="my-1">
          <v-card-text>
            <v-layout>
              <v-flex sm1 md1 hidden-sm-only text-xs-left>
                <div>
                  <span class="display-1 font-weight-thin grey--text">{{ reservation.id }}</span>
                </div>
              </v-flex>

              <v-flex xs3 sm1 md2 text-xs-center text-sm-left>
                <v-badge color="green" overlap>
                  <span slot="badge">{{ reservation.guests }}</span>
                  <v-icon color="grey lighten-1" large>account_circle</v-icon>
                </v-badge>
              </v-flex>

              <v-flex md4 sm5 hidden-xs-only>
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

              <v-flex xs9 sm5 md4>
                <div>
                  <v-icon color="green" class="mr-2" small>access_time</v-icon>
                  <strong class="mr-1">Time:</strong>
                  <span class="green--text mr-5">
                    {{ reservation.time | moment("timezone", "Bahrain", "h:mm:ss") }}
                  </span>
                </div>
                <div>
                  <v-icon color="green" class="mr-2" small>calendar_today</v-icon>
                  <strong class="mr-1">Date:</strong>
                  <span class="font-weight-light">
                    {{ reservation.time | moment("timezone", "Bahrain", "DD.MM.YYYY") }}
                  </span>
                </div>
                <div>
                  <v-icon color="green" class="mr-2" small>timeline</v-icon>
                  <strong class="mr-1">Duration:</strong>
                  <span
                    class="font-weight-light"
                  >{{ reservation.duration / 1000000 | duration('humanize') }}</span>
                </div>
              </v-flex>

              <v-flex xs1 sm1 md1 text-xs-center>
                <v-icon v-if="reservation.state == 'created'" color="grey">done</v-icon>
                <v-icon v-else-if="reservation.state == 'approved'" color="green">done_all</v-icon>
                <v-icon v-else-if="reservation.state == 'cancelled'" color="red">close</v-icon>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-content>

    <v-layout column align-center v-else-if="loading">
      <v-progress-circular :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>

    <v-layout column align-center v-else-if="!errored && !loading && reservations.length == 0">
      <h2 class="font-weight-light">No upcoming reservations</h2>
    </v-layout>

    <v-layout column align-center v-else-if="errored">
      <h2 class="error--text font-weight-light">Sorry, try again later</h2>
    </v-layout>
  </v-container>
</template>


<script>
import axios from 'axios';
import config from '../config';

export default {
  data() {
    return {
      reservations: [],
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.reservationHost = config.reservationHost;

    // TODO: Show something in case of empty arrray.
    // Get all upcoming reservations.
    axios.get(`${this.reservationHost}/reservations`)
      .then((response) => {
        this.reservations = response.data;
      })
      .catch((error) => {
        this.error = error;
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
