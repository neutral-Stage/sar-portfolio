<template>
  <v-container class="section">
    <v-row class="fill-height">
      <v-col cols="12">
        <PageTitle text="Experience"></PageTitle>

        <v-card max-width="800" color="transparent" flat class="mt-8">
          <v-card-text class="py-0">
            <v-timeline
              align-top
              dense
              v-for="(exp, i) in experiences"
              :key="i"
            >
              <v-timeline-item
                color="black"
                icon-color="primary"
                icon="mdi-briefcase"
                fill-dot
                large
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <h2 class="text-title text-sm-h6">{{ exp.date }}</h2> 
                  </v-col>
                  <v-col>
                    <h3 class="text-title text-sm-h6"> {{ exp.title }} </h3>
                    <a :href="exp.url" target="_blank" class="black--text">
                      <h4 class="subtitle-2">
                        {{ exp.institute_name }}
                      </h4>
                    </a>

                    <h5 class="subtitle-2">
                      {{ exp.location }}
                    </h5>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
        <ClickHere path="/contact" text="Contact Me"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Front End Developer",
          date: "2020-Now",
          institute_name: "123 Workforce",
          location: "Dublin,Ireland",
          url: "https://www.123workforce.com/",
        },
        {
          title: "Full Stack Developer",
          date: "2019-2020",
          institute_name: "Code Builder IT",
          location: "Dhaka,Bangladesh",
          url: "http://codebuilderit.com/",
        },
        {
          title: "Full Stack Developer",
          date: "2018-2019",
          institute_name: "Boi Kotha",
          location: "Dhaka,Bangladesh",
          url: "http://boikotha.net/",
        },
        {
          title: "Full Stack Developer",
          date: "2017-2018",
          institute_name: "Freelancer",
          location: "Dhaka,Bangladesh",
          url: "https://www.fiverr.com/",
        },
      ],
    };
  },
};
</script>
