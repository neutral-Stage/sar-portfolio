<template>
  <v-app ref="app">
    <v-container pa-0 fluid>
      <v-row no-gutters>
        <v-btn
          fab
          fixed
          top
          left
          @click.stop="drawer = !drawer"
          color="black"
          class="hidden-lg-and-up mt-sm-6 ml-sm-2 mt-0 ml-0"
          dark
          
        >
          <v-icon  color="primary">mdi-menu</v-icon>
        </v-btn>
        <v-col lg="2" class="sidebar hidden-md-and-down">
          <Sidebar @tabLinks="tabLinks" @iconLinks="iconLinks" />
        </v-col>
        <v-navigation-drawer
          v-model="drawer"
         fixed
          temporary
          dark
          color="black"
          width="280"
        >

        <router-link tag="v-img" to="/">
              <v-img
                class="rounded-circle myAvatar"
                src="@/assets/images/avatar.jpg"
              ></v-img>
            </router-link>
             <v-col cols="12" class="text-center bg-primary mb-1">
            <div class="text-h5">Shuvo Anirban Roy</div>
          </v-col>
          <v-col cols="12" class="text-center mb-1">
            <div class="text-h6 primary--text">Full Stack Developer</div>
          </v-col>
          <v-list nav dense class="text-center ">
            <v-list-item-group v-model="group" active-class="primary--text ">
              <v-list-item v-for="(tab, i) in tabs" :key="i" :to="tab.link" >
                <v-list-item-title class="primary--text title">
                  {{ tab.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-row dense>

          <v-col cols="12" class="text-center bg-primary mt-1">
            <div class="text-h6 black--text">Stay Connected</div>
          </v-col>
          <v-col class="text-center mt-1">

            <v-btn text icon target="_blank" small class="mx-1" v-for="(icon,i) in icons" :key="i" :href="icon.link" >

               <v-icon color="primary"    >fab fa-{{icon.label}}</v-icon>
            </v-btn>
               
              
           
          </v-col>
          </v-row>
        </v-navigation-drawer>

        <v-col lg="10" class="main">
          <v-container>
            <v-row justify="center" align="center">
              <v-col lg="10" class="back-card rounded-lg">
                <transition
                  name="slide-right"
                  mode="out-in"
                  @beforeLeave="beforeLeave"
                >
                  <keep-alive>
                    <router-view class="section"></router-view>
                  </keep-alive>
                </transition>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

const Sidebar = () => import("./components/Sidebar");
export default {
  name: "App",

  components: { Sidebar },

  data() {
    return {
      tabIndex: 0,
      tabs: [],
      drawer: false,
      group: null,
      icons:[]
    };
  },

  methods: {
    tabLinks(tabs) {
      this.tabs = tabs;
    },
    iconLinks(icons) {
      this.icons = icons;
    },


    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, .3);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
