<template>
    <div>
        <ul>
            <span>Build And Maintain 3 projects:</span>
            <li>Web App</li>
            <li>SDK imbeded in several websites</li>
            <li>Innercompany dashboard</li>
        </ul>
        <div>
            <span><b>Vue Stack:</b></span>
            <img :src="vueLogo" height="22">
            <img :src="vuetifyLogo" height="22">
            <span>Vue, Vuex, vue-router, Vuetify.</span>
        </div>
        <div>
            <b>Backend Stack: </b>
            <img :src="nodejsLogo" height="22">
            <img :src="azureLogo" height="22">
            <img :src="postgresql" height="22">
            <span>NodeJs, Azure functions, Postgres</span>
            <div>I've created several NodeJs endpoints (Azure serverless), with Postgress named queries (instead ORM)</div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    vueLogo: require("@/assets/vue.logo.png"),
    vuetifyLogo: require("@/assets/vuetify.logo.png"),
    nodejsLogo: require("@/assets/nodejs.logo.png"),
    azureLogo: require("@/assets/azure.logo.png"),
    postgresql: require("@/assets/postgresql.logo.png")
  })
};
</script>

<style>
</style>
