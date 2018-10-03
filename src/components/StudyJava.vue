<template>
    <div>
        <b>Stack: Java, Spring, AngularJs </b>
        <img :src="javaLogo">
        <img :src="springLogo">
        <img :src="AngularjsLogo">
        <div>
            <span>6 month course </span>
            <a href="https://github.com/Yanipo5/Coupon-System">
                <img :src="githubLogo" >
                <span> https://github.com/Yanipo5/Coupon-System</span>
            </a>
        </div>
        <video style="width: 100%;" controls>
            <source :src="finalProject" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
  data: () => ({
    javaLogo: require("@/assets/java.logo.png"),
    springLogo: require("@/assets/spring.logo.png"),
    AngularjsLogo: require("@/assets/angularjs.logo.png"),
    githubLogo: require("@/assets/github.logo.png"),
    finalProject: require("@/assets/study.JB.coupon-system.mp4"),
    autoplay: false
  })
};
</script>

<style scoped>
img {
  height: 22px;
}
</style>

