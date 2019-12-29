<template>
  <div>
    <v-btn small elevation="0" color="orange" :dark="selectedType !== ALL" :disabled="selectedType === ALL" @click="selectedAll" class="mr-3">すべて</v-btn>
    <v-btn small elevation="0" color="orange" :dark="selectedType !== UNANSWERED" :disabled="selectedType === UNANSWERED" @click="selectedUnanswered" class="mr-3">未回答</v-btn>
    <v-btn small elevation="0" color="orange" :dark="selectedType !== ANSWERED" :disabled="selectedType === ANSWERED" @click="selectedAnswered">回答済み</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Constants from '../../Constants'

@Component
export default class SelectDisplayedTypeButtons extends Vue {
  private ALL = 'all'
  private UNANSWERED = 'unanswered'
  private ANSWERED = 'answered'

  private selectedType = this.ALL;

  private selectedAll () {
    if (this.selectedType === this.ALL) {
      return
    }
    this.selectedType = this.ALL
    this.$emit('selectReceivedType', Constants.SELECTED_ALL)
  }

  private selectedUnanswered () {
    if (this.selectedType === this.UNANSWERED) {
      return
    }
    this.selectedType = this.UNANSWERED
    this.$emit('selectReceivedType', Constants.SELECTED_UNANSWERED)
  }

  private selectedAnswered () {
    if (this.selectedType === this.ANSWERED) {
      return
    }
    this.selectedType = this.ANSWERED
    this.$emit('selectReceivedType', Constants.SELECTED_ANSWERED)
  }
}
</script>
