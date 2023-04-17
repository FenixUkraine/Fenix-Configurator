<template>
  <q-page padding>
    <!-- content -->

    <!-- <q-scroll-area class="fit"> -->
    <q-list padding>
      <q-item v-ripple clickable>
        <q-item-section avatar>Вхід №1:</q-item-section>
        <q-item-section>
          <q-select v-model="model" :options="options" label="Вхід №1" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item v-ripple clickable>
        <q-item-section avatar>Вхід №2:</q-item-section>
        <q-item-section>
          <div class="q-pa-md">
            <q-checkbox v-model="val" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item v-ripple clickable>
        <q-item-section avatar>Тривалість тривоги:</q-item-section>
        <q-item-section>
          <div class="q-pa-md">
            <q-badge color="secondary">
              {{ standard }} (секунд)
            </q-badge>

            <q-slider v-model="standard" :min="0" :max="50" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- </q-scroll-area> -->
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',
  setup() {
    return {
      tab: ref("mails"),
      splitterModel: ref(20),
      model: ref(null),
      options: [
        "Не задіян",
        "Запалення",
        "Двері водія",
        "Двері пасажира",
        "Капот",
      ],
      val: ref(true),
      standard: ref(2),
    };
  },
};
</script>
