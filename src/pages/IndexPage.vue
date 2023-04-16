<template>
  <q-page class="flex flex-center">
    <q-btn v-on:click="$ble.connect()">Connect BLE</q-btn>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
