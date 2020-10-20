<template>
  <v-container>
    <v-row class="fill-height">
      <v-col cols="12">
        <PageTitle text="Portfolio"></PageTitle>

        <v-row class="mt-6">
          <v-col cols="12" sm="6" lg="3" v-for="(portfolio, i) in portfolios" :key="i">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
                :href="portfolio.link"
                target="_blank"
              >
                <v-img
                  :aspect-ratio="16 / 9"
                  :src="portfolio.image"
                  :lazy-src="portfolio.lazy_img"
                  contain
                  class="black"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex flex-wrap justify-center  transition-fast-in-fast-out black  v-card--reveal  white--text"
                      style="height: 100%;"
                    >
                      <v-btn
                        v-for="lang in portfolio.lang"
                        :key="lang"
                        class="primary--text my-auto mx-4 "
                        color="black"
                        small
                        elevation="12"
                        >{{ lang }}</v-btn
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="black">
                  <h3
                    class="text-h6 font-weight-light primary--text text-center  "
                  >
                    {{ portfolio.title }}
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <ClickHere path="/education" text="My Education"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          title: "Bijoy Ministries",
          link: "https://bijoyministriesintl.org/",
          image: "/portfolio/bijoybangladesh.jpg",
          lazy_img: "/portfolio/bijoybangladesh_lazy.jpg",
          lang: ["html", "css3", "vue js", "node js", "vuetify", "firebase"],
        },
        {
          title: "Sacrifice ICT",
          link: "https://www.sacrificeict.org/",
          image: "/portfolio/sac.jpg",
          lazy_img: "/portfolio/sac_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "Boi Kotha",
          link: "http://boikotha.net/",
          image: "/portfolio/boikotha.jpg",
          lazy_img: "/portfolio/boikotha_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "Grace Foundation",
          link: "http://gracefoundation.com/",
          image: "/portfolio/grace.jpg",
          lazy_img: "/portfolio/grace_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "Code Builder IT",
          link: "http://codebuilderit.com/",
          image: "/portfolio/codebuilder.jpg",
          lazy_img: "/portfolio/codebuilder_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "CIV",
          link: "https://civ.ie/",
          image: "/portfolio/civie.jpg",
          lazy_img: "/portfolio/civie_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "123 Workforce",
          link: "https://www.123workforce.com/",
          image: "/portfolio/123workforce.jpg",
          lazy_img: "/portfolio/123workforce_lazy.jpg",
          lang: ["html", "css3", "vue js", "php", "laravel", "MySQL"],
        },
        {
          title: "Shuvo Anirban Roy",
          link: "http://shuvoanirbanroy.com/",
          image: "/portfolio/sar_folio.jpg",
          lazy_img: "/portfolio/sar_folio_lazy.jpg",
          lang: ["html", "css3", "vue js", "node js", "vuetify", "firebase"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.make-center {
  transform: translate(-50%, 0%);
}
</style>
