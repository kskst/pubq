<template>
  <div>
    <span>回答数：{{ numOfAnswered }}件</span><br />
    <span>回答率：{{ responseRate }}パーセント</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SelectDisplayedTypeButtons from '../molecules/SelectDisplayedTypeButtons.vue'

@Component
export default class ResponseRate extends Vue {
  @Prop({ type: Number, default: 0 }) private numOfAnswered!: number;
  @Prop({ type: Number, default: 0 }) private numOfQuestions!: number;

  private get responseRate () {
    if (this.numOfQuestions === 0) {
      return 0
    }
    const result = this.numOfAnswered / this.numOfQuestions * 100
    return result
  }
}
</script>
