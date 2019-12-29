<template>
  <div class="home">
    <ReceiveList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ReceiveList from '../organisms/ReceiveList.vue'

@Component({
  components: {
    ReceiveList
  }
})
export default class ReceiveListPage extends Vue {
  @Prop() private msg!: string;
}
</script>
