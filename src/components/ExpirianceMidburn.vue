<template>
    <div>
        <div>
            <span><b>Frontend Stack:</b></span>
            <img :src="angularjs" height="22">
            <img :src="bootstrapLogo" height="22">
            <span> Angularjs, Bootstrap.</span>
        </div>
        <div>
            <b>Backend Stack: </b>
            <img :src="nodejsLogo" height="22">
            <img :src="mysqlLogo" height="22">
            <span> NodeJs, express, MySql</span>
        </div>
        <div>
            <a href="https://github.com/Midburn/spark">
                <img :src="githubLogo" height="22">
                <span>https://github.com/Midburn/spark</span>
            </a>
        </div>
        <div>Participated in extending the Management Portal for Midburn events, end 2 end development, using AngularJs, NodeJs, MySql with Knex & Bookshelf ORM.</div>
    </div>
</template>

<script>
export default {
  data: () => ({
    angularjs: require("@/assets/angularjs.logo.png"),
    bootstrapLogo: require("@/assets/bootstrap.logo.png"),
    githubLogo: require("@/assets/github.logo.png"),
    nodejsLogo: require("@/assets/nodejs.logo.png"),
    mysqlLogo: require("@/assets/mysql.logo.png")
  })
};
</script>

<style>
</style>
