<template>
  <div>
    <div>
      <span class="flow-over-particals">
        <v-tooltip bottom v-for="c in categoties" :key="c.name" :disabled="$vuetify.breakpoint.smAndUp">
          <v-btn slot="activator" @click="setCategory(c.name)" :class="buttonsClass(c.name)" :style="buttonsStyle" class="elevation-24">
            <v-icon class="pr-2">{{c.icon}}</v-icon>
            <span v-show="$vuetify.breakpoint.smAndUp">{{c.name}}</span>
          </v-btn>
          <span>{{c.name}}</span>
        </v-tooltip>
      </span>
    </div>
    <transition name="slide-fade" appear>
      <div :style="expansionStyleObj" :class="expansionClass" class="flow-over-particals">
        <v-expansion-panel v-model="expandedPanel" :popout="$vuetify.breakpoint.smAndUp">
          <v-expansion-panel-content class="deep-orange">
            <div slot="header" class="panel-title subheading .font-weight-light">
              Job Interview my Bot (or talk about Starwars :)
            </div>
            <v-card>
              <v-card-text class="grey lighten-3 pa-0">
                <iframe width="100%" height="350" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d6404865-92a5-48b7-bba6-0765aae12755"></iframe>
              </v-card-text>
            </v-card>

          </v-expansion-panel-content>
          <v-expansion-panel-content v-for="(p, i) in filteredPanels" :key="i" class="elevation-24">
            <div slot="header" class="panel-title">
              <span class="panel-dates" :style="panelDates">{{p.dates}}</span>
              <v-chip class="name-chip px-0 mr-2" small :color="categoryColor(p.category)">
                <v-icon small>{{getCategoryIcon(p.category)}}</v-icon>
              </v-chip>
              <b>{{p.title}}</b>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                <component v-if="p.component" :is="p.component" />
                <div v-else v-html="p.body" />
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </transition>
  </div>
</template>

<script>
import panels from "@/assets/data.json";
import categoties from "@/assets/categories.json";
import ExpirianceJeeng from "./ExpirianceJeeng";
import ExpirianceMidburn from "./ExpirianceMidburn";
import StudyComputerScience from "@/components/StudyComputerScience";
import StudyJava from "@/components/StudyJava";

export default {
  data: () => ({
    categoties,
    category: "all",
    panels,
    expandedPanel: 0
  }),
  components: {
    ExpirianceJeeng,
    ExpirianceMidburn,
    StudyComputerScience,
    StudyJava
  },
  computed: {
    panelDates() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { flex: "0 0 50px" };
        default:
          return { flex: "0 0 110px" };
      }
    },
    filteredPanels() {
      return this.category === "all"
        ? this.panels
        : this.panels.filter(p => p.category === this.category);
    },
    expansionStyleObj() {
      return {
        margin: "auto",
        width: "600px",
        maxWidth: "100%",
        opacity: 0.75
      };
    },
    buttonsStyle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { width: "25%" };
        default:
      }
    },
    expansionClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "mt-0";
        default:
          return "mt-3";
      }
    }
  },
  methods: {
    categoryColor(category) {
      switch (category) {
        case "experiance":
          return "blue";
        case "study":
          return "green";
        case "other":
          return "pink";
        case "activites":
          return "purple";
      }
    },
    buttonsClass(category) {
      const breakpoint = this.$vuetify.breakpoint.name;
      return `${this.categoryColor(category)} ${_spacing()}`;
      function _spacing() {
        switch (breakpoint) {
          case "xs":
            return `mx-0 my-0`;
        }
      }
    },
    getCategoryIcon(category) {
      return this.categoties.find(c => c.name === category).icon;
    },
    setCategory(category) {
      this.expandedPanel = 1;
      this.category = category;
    }
  }
};
</script>

<style scoped>
.panel-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.panel-dates {
  display: inline-block;
}
.name-chip >>> .v-chip__content {
  padding: 7px;
}

.list-item {
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
  transition-delay: 0.5s;
}
.slide-fade-enter {
  transform: translateY(100vh);
  opacity: 0;
}
</style>