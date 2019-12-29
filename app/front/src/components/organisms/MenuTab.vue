<template>
  <v-tabs grow backgroundColor="orange lighten-5">
    <v-tab @click="jumpToReceived">届いた質問</v-tab>
    <v-tab @click="jumpToSend">送った質問</v-tab>
    <v-tab @click="jumpToSettings">設定</v-tab>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Constants from '../../Constants'

@Component
export default class MenuTab extends Vue {
  @Prop() private msg!: string;

  private jumpToReceived () {
    this.$emit('jumpTo', Constants.PAGE_RECEIVED)
  }

  private jumpToSend () {
    this.$emit('jumpTo', Constants.PAGE_SEND)
  }

  private jumpToSettings () {
    this.$emit('jumpTo', Constants.PAGE_SETTINGS)
  }
}
</script>
