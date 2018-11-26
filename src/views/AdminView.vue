<template>
  <v-container>
    <v-data-table :headers="headers" :items="reservations" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.table_id }}</td>
        <td>{{ props.item.duration }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.full_name }}</td>
        <td>{{ props.item.guests }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.time }}</td>
      </template>
    </v-data-table>

    <h1>Reservations</h1>

    <v-flex v-for="(reservation,id) in reservations" :key="id">
      <v-card class="my-1">
        <v-card-text>
          <v-layout >
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
                <strong class="whitegreen--text">Email: </strong>
                <span class="font-weight-light">{{ reservation.email }}</span>
              </div>
              <div>
                <v-icon color="green" class="mr-2" small>phone</v-icon>
                <strong class="whitegreen--text">Phone: </strong>
                <span class="font-weight-light">{{ reservation.phone }}</span>
              </div>
            </v-flex>

            <v-flex xs9 sm5 md4>
              <div>
                <v-icon color="green" class="mr-2" small>access_time</v-icon>
                <strong class="white--text">Time: </strong>
                <span class="font-weight-light">{{ Date.parse(reservation.time) }}</span>
              </div>
              <div>
                <v-icon color="green" class="mr-2" small>timeline</v-icon>
                <strong class="white--text">Duration: </strong>
                <span class="font-weight-light">{{ reservation.duration }} min</span>
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

    <h1></h1>
  </v-container>
</template>


<script>
import axios from 'axios';
import config from '../config';

export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Table ID', value: 'table_id' },
        { text: 'Duration', value: 'duration' },
        { text: 'Email', value: 'email' },
        { text: 'Full Name', value: 'full_name' },
        { text: 'Guests', value: 'guests' },
        { text: 'Phone', value: 'phone' },
        { text: 'Time', value: 'time' },
      ],
      reservations: [],
    };
  },
  mounted() {
    this.reservationHost = config.reservationHost;

    axios
      .get(`${this.reservationHost}/reservations`)
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
