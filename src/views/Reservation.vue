<template>
  <v-container>
    <v-snackbar v-model="response.showBar" :color="response.color" top>
      <span>{{ response.msg }}</span>
      <v-btn flat @click="response.showBar = false">Close</v-btn>
    </v-snackbar>

    <v-flex xs12 row class="text-xs-center mb-3">
      <h1 class="display-1 font-weight-light">Table Reservation</h1>
    </v-flex>

    <v-form ref="form" v-model="form.valid">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <v-text-field
            :color="form.theme"
            v-model="reservation.name"
            :rules="rules.name"
            class="mr-3"
            label="Full Name"
            prepend-icon="person"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md4>
          <v-text-field
            :color="form.theme"
            v-model="reservation.email"
            :rules="rules.email"
            class="mr-3"
            label="E-mail"
            prepend-icon="email"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md4>
          <v-text-field
            :color="form.theme"
            v-model="reservation.phone"
            :rules="rules.phone"
            class="mr-3"
            label="Phone"
            prepend-icon="phone"
          ></v-text-field>
        </v-flex>

        <v-flex xs6 sm6 md4>
          <v-dialog
            ref="timeDialog"
            v-model="dialog.time"
            :return-value.sync="reservation.time"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              :color="form.theme"
              v-model="reservation.time"
              :rules="[rules.required]"
              readonly
              class="mr-3"
              label="Time"
              slot="activator"
              prepend-icon="access_time"
            ></v-text-field>

            <v-time-picker :color="form.theme" v-model="reservation.time" format="24hr">
              <v-btn flat @click="dialog.time = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat @click="$refs.timeDialog.save(reservation.time)" color="green">OK</v-btn>
            </v-time-picker>
          </v-dialog>
        </v-flex>

        <v-flex xs6 sm6 md4>
          <v-dialog
            ref="dateDialog"
            v-model="dialog.date"
            :return-value.sync="reservation.date"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              :color="form.theme"
              v-model="reservation.date"
              slot="activator"
              :rules="[rules.required]"
              readonly
              class="mr-3"
              label="Date"
              prepend-icon="event"
            ></v-text-field>

            <v-date-picker :color="form.theme" v-model="reservation.date" class="mr-3">
              <v-btn flat @click="dialog.date = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat @click="$refs.dateDialog.save(reservation.date)" color="green">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>

        <v-flex xs12 sm6 md4>
          <v-select
            v-model="reservation.tableID"
            :color="form.theme"
            :loading="response.loading"
            :rules="[rules.required]"
            :item-text="table => table.id + '. ' + table.description"
            :items="tables"
            class="mr-3"
            item-value="id"
            label="Table ID"
            prepend-icon="location_on"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm12 md6>
          <v-slider
            v-model="reservation.duration"
            :rules="rules.duration"
            :color="form.theme"
            class="mr-3"
            min="0"
            max="360"
            step="10"
            label="Duration"
            thumb-label
            prepend-icon="timeline"
          ></v-slider>
        </v-flex>

        <v-flex xs12 sm12 md6>
          <v-slider
            v-model="reservation.guests"
            label="Number Of Guests"
            :rules="rules.guests"
            :color="form.theme"
            min="0"
            max="6"
            class="mr-3"
            thumb-label
            prepend-icon="people"
          ></v-slider>
        </v-flex>

        <v-flex xs12 row class="text-xs-center">
          <v-btn class="mr-3" color="green" :disabled="!form.valid" @click="submit">OK</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        valid: false,
        theme: 'green',
      },
      response: {
        msg: null,
        loading: true,
        showBar: false,
      },
      tables: [],
      reservation: {
        date: null,
        time: null,
        tableID: 1,
        phone: '',
        email: '',
        guests: 1,
        duration: 60,
        name: '',
      },
      dialog: {
        time: false,
        date: false,
      },
      rules: {
        required: v => !!v || 'Required',
        guests: [
          value => (value < 7 && value > 0) || 'Number of guests can be from 1 to 6',
          value => !!value || 'Number Of Guests is required',
        ],
        email: [
          value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
          value => !!value || 'Required',
        ],
        name: [
          value => !!value || 'Required',
          value => value.length <= 30 || 'Name must be less than 30 characters',
        ],
        duration: [
          value => !!value || 'Required',
          value => value >= 60 || 'Duration should be more then 60 minutes',
        ],
        phone: [
          phone => !!phone || 'Required',
        ],
      },
    };
  },
  mounted() {
    axios.get(`${this.$apiHost}/tables`)
      .then((response) => {
        this.tables = response.data;
      })
      .catch((error) => {
        this.response.color = 'error';
        this.response.msg = error.response.data.error;
      })
      .finally(() => {
        this.response.loading = false;
      });
  },
  methods: {
    submit() {
      this.reservation.splitedDate = this.reservation.date.split('-');
      this.reservation.splitedTime = this.reservation.time.split(':');

      this.startTime = new Date(
        Number(this.reservation.splitedDate[0]),
        Number(this.reservation.splitedDate[1] - 1),
        Number(this.reservation.splitedDate[2]),
        Number(this.reservation.splitedTime[0]),
        Number(this.reservation.splitedTime[1]),
      ).toISOString();

      if (this.$refs.form.validate()) {
        axios.post(`${this.$apiHost}/reservations`, {
          full_name: this.reservation.name,
          email: this.reservation.email,
          table_id: this.reservation.tableID,
          time: this.startTime,
          phone: this.reservation.phone,
          guests: this.reservation.guests,
          duration: this.reservation.duration * 60000000000,
        }).then((response) => {
          this.response.reservation = response.data;
          this.response.color = 'success';
          this.response.msg = 'Your reservation was successfully created';
          this.response.showBar = true;
        }).catch((error) => {
          this.response.msg = error.response.data.error;
          this.response.color = 'error';
          this.response.showBar = true;
        }).finally(() => {
          this.response.loading = false;
        });
      }
    },
  },
};
</script>
