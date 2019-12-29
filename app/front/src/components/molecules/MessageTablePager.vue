<template>
  <div>
    <v-select v-model="selectedDisplayNumber" :items="displayNumbers" />
    <span>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Constants from '../../Constants'

@Component
export default class SelectDisplayedTypeButtons extends Vue {
  @Prop({ type: Number, default: 0 }) private numOfmessage!: number;
  private displayNumbers = ['10', '20', '30', '50', 'ALL']
  private selectedDisplayNumber = '20';
  private currentPage = 1;

  private get pagerLink () {
    const numOfPage = Math.ceil(this.numOfmessage / Number(this.selectedDisplayNumber))
      return ''
  }

}
</script>
