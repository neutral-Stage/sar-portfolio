<template>
  <v-container class="make-center">
    <v-row class="fill-height ">
      <v-col cols="12">
        <PageTitle text="About Me"></PageTitle>
        <h3 class="personal-info py-8">
          <h3 class="text-lg-h5 text-sm-h6 font-weight-bold black--text ">
            Name: {{ personal_info.name }}
          </h3>
          <h3 class="text-lg-h5 text-sm-h6 font-weight-bold black--text py-1">
            Date of Birth: {{ personal_info.birthdate }}
          </h3>
          <h3 class="text-lg-h5 text-sm-h6 font-weight-bold black--text py-1">
            E-mail:
            <a :href="`mailto:${personal_info.email}`" class=" black--text">
              {{ personal_info.email }}</a
            >
          </h3>
          <h3 class="text-lg-h5 text-sm-h6 font-weight-bold black--text py-1">
            Location: {{ personal_info.location }}
          </h3>
          <h3 class="text-lg-h5 text-sm-h6 font-weight-bold black--text py-1">
            Languages: {{ personal_info.languages }}
          </h3>
        </h3>
        <h3 class="text-lg-h5 text-sm-h6  black--text">
          {{ personal_info.about }}
        </h3>

        <ClickHere path="/skills" text="My Skills"></ClickHere>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      personal_info: {
        name: "Shuvo Anirban Roy",
        birthdate: "17th August, 1994",
        location: "Dhaka, Bangladesh",
        languages: "English,Bengali",
        about:
          "Courteous and enthusiastic, I am interested in IT and everything in its orbit. I recently began to be fascinated by web programming, e.g. developing apps and building websites. As this area complements my studies, I am keen to gain more experience in the field. For this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.",
        email: "anirbanroy691@gmail.com",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.make-center {
  transform: translate(0%, 20%);
  @media screen and (max-width: 1024px) {
    transform: translate(0%, 5%);
  }
  @media screen and (max-width: 475px) {
    transform: translate(0%, 5%);
  }
}
.hireMe {
  transition: 0.5s ease-in-out;
}
.hireMe:hover {
  transform: translate(0%, 50%);
}

</style>
