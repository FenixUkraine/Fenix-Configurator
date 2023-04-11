<template>
  <q-page class="flex flex-center">
    Counter: {{ store.count }}
    <q-btn @click="store.increment">Increment</q-btn>
    <q-btn v-on:click="$ble.connect()">Connect BLE</q-btn>
  </q-page>
</template>

<script setup>
import { useCounterStore } from "../stores/example-store";
const store = useCounterStore();
</script>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
