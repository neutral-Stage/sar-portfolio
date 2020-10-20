<template>
  <v-container class="section">
    <v-row class="fill-height">
      <v-col cols="12">
        <PageTitle text="Contact"></PageTitle>

        <v-row>
          <v-col cols="12" > <h2 class="text-h6 mt-2">
             Send Me Mail from here
            </h2></v-col>
          <v-col cols="12">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="sendEmail"
            >
              <v-text-field
                v-model="info.name"
                :rules="nameRules"
                label="Name"
                placeholder="Your Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="info.email"
                :rules="emailRules"
                label="E-mail"
                placeholder="youremail@gmail.com"
                required
              ></v-text-field>

              <v-text-field
                v-model="info.subject"
                :rules="subjectRules"
                label="Subject"
                placeholder="Subject"
                required
              ></v-text-field>
              <v-textarea
                outlined
                v-model="info.message"
                label="Message"
                placeholder="Write some message"
              ></v-textarea>
              <v-btn
                color="black "
                class="primary--text"
                type="submit"
                :disabled="!valid"
              >
                <v-progress-circular
                  v-if="loader"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
                submit
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
        <ClickHere path="/" text="Home Page"></ClickHere>
      </v-col>
    </v-row>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      

      <v-card > 
        <div class="text-right pt-3 black primary--text">
<v-btn
            text
            @click="dialog = false"
            small
          >
          <v-icon  color="primary">mdi-close</v-icon>
          </v-btn>
        </div>
  
<div class=" text-center pb-8 black primary--text">
        <h2 class="title"> Thank you for your mail. </h2>
        <h3 class="title">  I'll contact with you soon. </h3>
       
</div>
     

       
       
      </v-card>
    </v-dialog>
  </div>
  </v-container>
</template>
<script>

import axios from 'axios'
axios.baseURL = "http://127.0.0.1:3000";
import emailjs from 'emailjs-com';
export default {
  data: () => ({
     dialog: false,
    valid: true,
    loader: false,
  
    nameRules: [(v) => !!v || "Name is required"],
   
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    
    subjectRules: [(v) => !!v || "Subject is required"],
    
    messageRules: [(v) => !!v || "Message is required"],
    info:{
      name: "",
      email: "",
      subject: "",
      message: "",
    }

  }),

  methods: {
    submit() {
      this.$refs.form.reset();
    },
   sendEmail(){
     
   
    emailjs.send('service_3sbdzu9', 'template_6z0ti89', this.info, 'user_lGefbjeUXEPQBgLK1x1qF').then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.dialog=true;
        this.reset();
    },function(error) {
         console.log('FAILED...', error);
    })
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
