<template>
  <div class="home">
    SendListPage
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SendListPage extends Vue {
  @Prop() private msg!: string;
}
</script>
