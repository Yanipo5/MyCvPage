<template>
  <div>
    <span>Slow pace study for a second degree, mostly evening 1 course per semester, averange 81</span>
    <img :src="studyCS" style="width:100%">
  </div>
</template>

<script>
export default {
  data: () => ({
    studyCS: require("@/assets/study.cs.png")
  })
};
</script>

<style>
</style>
