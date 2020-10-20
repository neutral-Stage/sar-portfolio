<template>
  <v-container pa-0 fluid>
    <v-row class="back" no-gutters>
      <v-col cols="12" class="back__body">
        <v-row no-gutters>
          <v-col cols="12" class="mb-8">
            <router-link tag="v-img" to="/">
              <v-img
                class="rounded-circle myAvatar"
                src="../assets/images/avatar.jpg"
              ></v-img>
            </router-link>
          </v-col>
          <v-col cols="12" class="text-center bg-primary mb-2">
            <h1 class="text-h5">Shuvo Anirban Roy</h1>
          </v-col>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h6 primary--text">Full Stack Developer</h2>
          </v-col>
          <v-col
            cols="12"
            v-for="tab in tabs"
            :key="tab.id"
            class="text-center"
          >
            <v-btn
              text
              class="mx-auto custom-button primary--text text-h6"
              :id="'section' + tab.id + 'Btn'"
              :to="tab.link"
              large
              >{{ tab.label }}</v-btn
            >
          </v-col>
          <v-col cols="12" class="text-center bg-primary mt-8">
            <h3 class="text-h6 black--text">Stay Connected</h3>
          </v-col>
          <v-col class="text-center mt-4">

            <v-btn text icon target="_blank" v-for="(icon,i) in icons" :key="i" :href="icon.link" >

               <v-icon color="primary" class="mx-2"  >fab fa-{{icon.label}}</v-icon>
            </v-btn>
               
              
           
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          label: "About",
          link: "/about",
        },
        {
          id: 2,
          label: "Skills",
          link: "/skills",
        },
        {
          id: 3,
          label: "Portfolio",
          link: "/portfolio",
        },
        {
          id: 4,
          label: "Education",
          link: "/education",
        },
        {
          id: 5,
          label: "Experience",
          link: "/experience",
        },
        // {
        //   id: 6,
        //   label: "Motivation",
        //   link: "/motivation",
        // },
        // {
        //   id: 7,
        //   label: "Activities",
        //   link: "/activities",
        // },
        {
          id: 8,
          label: "Contact",
          link: "/contact",
        },
      ],
      myData: "Dummy Data",
      icons:[
        {
          label:"github",
          link:"https://github.com/neutral-Stage"
        },
        {
          label:"linkedin",
          link:"https://www.linkedin.com/in/sar333/"
        },
        {
          label:"facebook",
          link:"https://www.facebook.com/shuvoaroy/"
        },
        {
          label:"twitter",
          link:"https://twitter.com/anirban_shuvo"
        },
        {
          label:"whatsapp",
          link:"https://wa.link/11baw8"
        },
        {
          label:"instagram",
          link:"https://www.instagram.com/shuvo_anirban/"
        },
        {
          label:"behance",
          link:"https://www.behance.net/sar333"
        },
        

      ]
    };
  },

  mounted: function() {
    this.$emit("tabLinks", this.tabs);
    this.$emit("iconLinks", this.icons);
  },
  created() {
    console.log(this.$route.path); // path is /post
  },
};
</script>
