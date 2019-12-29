<template>
  <div class="home">
    <SelectDisplayedTypeButtons @selectReceivedType="selectReceivedType"/>
    <ResponseRate />
    <MessageTablePager numOfmessage="50" />
    <MessageTable />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SelectDisplayedTypeButtons from '../molecules/SelectDisplayedTypeButtons.vue'
import ResponseRate from '../molecules/ResponseRate.vue'
import MessageTablePager from '../molecules/MessageTablePager.vue'

@Component({
  components: {
    SelectDisplayedTypeButtons,
    ResponseRate,
    MessageTablePager
  }
})
export default class ReceiveList extends Vue {
  @Prop() private msg!: string;

  private selectReceivedType (selectedReceivedType: string) {
    console.log(selectedReceivedType)
  }
}
</script>
