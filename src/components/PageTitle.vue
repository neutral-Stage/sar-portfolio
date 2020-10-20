<template>
  <h2
    class="text-lg-h2 text-sm-h4 text-h4 font-weight-bold text-decoration-underline mt-10 mt-sm-16 "
  >
    {{ text }}
  </h2>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
