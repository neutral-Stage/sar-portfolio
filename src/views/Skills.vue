<template>
  <v-container >
    <v-row class="fill-height">
      <v-col cols="12">
        <PageTitle text="Skills"></PageTitle>

        <v-row class="pt-6">
          <v-col cols="4" v-for="(skill, i) in skills" :key="i">
            <div class="skill text-center">
              <div class="skill-name py-2 text-h6 font-weight-medium">
                {{ skill.name }}
              </div>
              <div class="text-center">
                <v-progress-circular
                  :value="skill.value"
                  width="6"
                  size="80"
                  color="black"
                >
                  <div class="text-subtitle-1 font-weight-medium">
                    {{ skill.value }}%
                  </div>
                </v-progress-circular>
              </div>
            </div>
          </v-col>
        </v-row>
        <ClickHere path="/portfolio" text="My Portfolio"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "Vue",
          value: 90,
        },
        {
          name: "Sass",
          value: 90,
        },
        {
          name: "CSS",
          value: 90,
        },
        {
          name: "HTML",
          value: 90,
        },
        {
          name: "Js",
          value: 90,
        },
        {
          name: "React",
          value: 60,
        },
        {
          name: "Nodejs",
          value: 70,
        },
        {
          name: "Laravel",
          value: 80,
        },
        {
          name: "PHP",
          value: 80,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.make-center {
  transform: translate(0%, 10%);
}
</style>
