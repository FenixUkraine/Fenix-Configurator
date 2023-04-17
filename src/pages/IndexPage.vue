<template>
  <q-page class="flex flex-center">
    Counter: {{ store.count }}
    <q-btn @click="store.increment">Increment</q-btn>
    <q-btn v-on:click="$ble.connect()">Connect BLE</q-btn>

    <router-link to="/configurator/programs">Go to Configurator</router-link>

    <q-btn label="Help" color="primary" @click="alert = true" />

    <q-dialog v-model="alert" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useCounterStore } from "../stores/example-store";

export default defineComponent({
  //name: "IndexPage",
  setup() {
    const alert = ref(false);
    const store = useCounterStore();
    return {
      alert,
      store,
    };
  },
});
</script>
