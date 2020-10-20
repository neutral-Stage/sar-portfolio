<template>
  <v-container class="section">
    <v-row class="fill-height">
      <v-col cols="12">
        <PageTitle text="Education"></PageTitle>

        <v-card max-width="800" color="transparent" flat class="mt-8">
          <v-card-text class="py-0">
            <v-timeline align-top dense v-for="(edu, i) in educations" :key="i">
              <v-timeline-item
                color="black"
                icon-color="primary"
                icon="mdi-school"
                fill-dot
                large
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <h2 class="text-title text-sm-h6"> {{ edu.date }} </h2>
                  </v-col>
                  <v-col cols="9">
                    <h3 class="text-title text-sm-h6"> {{ edu.title }} </h3>
                    <a :href="edu.url" target="_blank" class="black--text">
                      <h4 class="subtitle-2">
                        {{ edu.institute_name }}
                      </h4>
                    </a>

                    <h5 class="subtitle-2">
                      {{ edu.location }}
                    </h5>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
        <ClickHere path="/experience" text="My Experience"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          title: "Computer Science & Engineering(C.S.E)",
          date: "2014-2019",
          institute_name: "National University, Bangladesh",
          location: "Dhaka - Mymensingh Hwy, Gazipur 1704",
          url: "http://www.nu.ac.bd/",
        },
        {
          title: "Higher Secondary Certificate(H.S.C)",
          date: "2011-2013",
          institute_name: "Banophool Adibashi Green Heart College",
          location: "Mirpur-13,Dhaka-1216",
          url: "https://baghc.edu.bd/",
        },
        {
          title: "Secondary School Certificate(S.S.C)",
          date: "2009-2011",
          institute_name: "Sharoj International School",
          location: "Mirpur-10,Dhaka-1216",
          url:
            "https://collegesinbangladesh.blogspot.com/2012/03/saroj-international-school-and-college.html",
        },
      ],
    };
  },
};
</script>
