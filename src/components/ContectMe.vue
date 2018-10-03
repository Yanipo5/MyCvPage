<template>
    <div class="text-xs-center" style="display:inline-block">
        <v-dialog v-model="dialog" width="500">
            <v-btn slot="activator" small outline dark class="flow-over-particals">Contact Me</v-btn>

            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Contact Details</v-card-title>

                <v-card-text style="text-align: left">
                    <div v-for="c in contactDetails" :key="c.name">
                        <img v-if="isImg(c)" class="contact-icon mr-1" :src="c.icon">
                        <v-icon v-else class="contact-icon mr-1">{{c.icon}}</v-icon>
                        <span v-show="$vuetify.breakpoint.smAndUp" class="contact-name">{{c.name}}:</span>
                        <a :href="getHref(c)" :style="linkStyle">{{c.link}}</a>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      contactDetails: [
        { name: "phone", link: "0545-850859", icon: "phone" },
        { name: "email", link: "yip528@gmail.com", icon: "email" },
        {
          name: "linkedIn",
          link: "www.linkedin.com/in/yanivperetz",
          icon: require("@/assets/linkedin.logo.png")
        },
        {
          name: "github",
          link: "https://github.com/Yanipo5",
          icon: require("@/assets/github.logo.png")
        },
        {
          name: "stackoverflow",
          link: "https://stackoverflow.com/story/yanivperetz",
          icon: require("@/assets/stackoverflow.logo.png")
        }
      ]
    };
  },
  computed: {
    linkStyle() {
      return this.$vuetify.breakpoint.xsOnly ? { fontSize: "12px" } : "";
    }
  },
  methods: {
    getHref(contact) {
      var prefix = "";
      switch (contact.name) {
        case "phone":
          prefix = "tel:";
          break;
        case "email":
          prefix = "mailto:";
          break;
      }
      return `${prefix}${contact.link}`;
    },
    isImg(contact) {
      switch (contact.name) {
        case "phone":
        case "email":
          return false;
        default:
          return true;
      }
    }
  }
};
</script>

<style scoped>
.contact-name {
  display: inline-block;
  width: 110px;
}
.contact-name::first-letter {
  text-transform: uppercase;
}
.contact-icon {
  height: 22px;
}
</style>
