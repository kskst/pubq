<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
      flat
    >
      <div class="d-flex align-center">
        <span>Public Question</span>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="mainContent">
      <v-container fluid>
        <MenuTab @jumpTo="jumpTo" />
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import MenuTab from '@/components/organisms/MenuTab.vue'
import Constants from './Constants'

@Component({
  components: {
    HelloWorld,
    MenuTab
  }
})
export default class App extends Vue {
  @Prop() private msg!: string;

  created () {
    this.$router.push({ name: Constants.PAGE_RECEIVED })
  }

  private jumpTo (pageName: string) {
    this.$router.push({ name: pageName })
  }
}
</script>

<style lang="sass" scoped>
.mainContent
  background-color: #FFF3E0
</style>
