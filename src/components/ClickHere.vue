<template>
  <h3
    class="text-center mt-12 text-h5 font-weight-bold click-here"
    @click="goto(path)"
  >
    <div
      id="animated-example"
      class="animated bounceOutDown mx-auto text-center "
    >
      <v-icon x-large>mdi-chevron-double-down</v-icon>
    </div>
    {{ text }}
  </h3>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
#animated-example {
  height: 80px;
  position: relative;
}
.click-here {
  cursor: pointer;
}
.animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-2rem);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(5rem);
  }
}
@keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-2rem);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(5rem);
  }
}
.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
</style>
