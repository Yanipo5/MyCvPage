<template>
  <v-app class="main-app">
    <h1 class="white--text">
      <span>Yaniv Peretz CV</span>
      <ContectMe />
    </h1>
    <ExpentionPanel class="slideInUp" />
    <vue-particles class="particals" color="#01579B" linesColor="#B3E5FC" :particlesNumber="particlesNumber" />
  </v-app>
</template>

<script>
import ExpentionPanel from "@/components/ExpentionPanel";
import ContectMe from "@/components/ContectMe";

export default {
  components: { ExpentionPanel, ContectMe },
  computed: {
    particlesNumber() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 40;
        case "sm":
          return 50;
        case "md":
          return 60;
        case "lg":
          return 70;
        case "xl":
          return 80;
      }
    }
  }
};
</script>

<style>
@keyframes slowBg {
  0% {
    background-color: white;
  }
  100% {
    background-color: #212121;
  }
}
.main-app {
  margin: auto;
  text-align: center;
  max-width: 100%;
  animation: slowBg 2s forwards;
  position: relative;
}
.particals {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
}
</style>
