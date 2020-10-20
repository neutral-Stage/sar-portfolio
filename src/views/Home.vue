<template>
  <v-container class="make-center">
    <v-row class="fill-height ">
      <v-col cols="12">
        <h1 class="text-h3 py-3 text-center">Welcome</h1>
        <h2 class="py-3 text-center  intro bolder-text">
          <span > {{ typeValue }} </span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h2>

        <div class="py-3 text-center">
          <v-btn
            color="black"
            class="primary--text text-h5 hireMe"
            large
            to="/contact"
            >Hire Me</v-btn
          >
        </div>

        <h3 class="text-center mt-12">
          <a href="/Resume.pdf" download class="black--text text-h4">
            Download My CV
          </a>
        </h3>

        <ClickHere path="/about" text="About Me"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClickHere from "@/components/ClickHere";
export default {
  components: {
    ClickHere,
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      charIndex: 0,

      typeArray: [
        "I'm Anirban Roy",
        "I'm a Web Developer",
        "I'm a Front End Developer",
        "I've 3+ years of experiece",
        "I work remotely ",
        "Click on other tabs",
        "To know more about me",
      ],
    };
  },
  methods: {
    typeText() {
      const typingSpeed = this.typingSpeed
      var typeValue = this.typeValue
      var newTextDelay = this.newTextDelay
      var typeArrayIndex = this.typeArrayIndex
      
      if (this.charIndex < this.typeArray[typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, newTextDelay);
      }
    },
    eraseText() {
       const typingSpeed = this.typingSpeed
       const erasingSpeed = this.erasingSpeed
       
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
.bolder-text {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 3.75rem;
  @media screen and (max-width: 1024px) {
    font-size: 2.75rem;
  line-height: 2.75rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 1.75rem;
  line-height: 1.75rem;
  }
}

.make-center {
  transform: translate(0%, 20%);
}
.hireMe {
  transition: 0.5s ease-in-out;
}
.hireMe:hover {
  transform: translate(0%, 50%);
}
.intro {
  span.cursor {
    display: inline-block;
    margin-left: 0.3rem;
    width: 0.4rem;
    background-color: #001d68;
    animation: cursorBlink 1s infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  span.cursor.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: #001d68;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
