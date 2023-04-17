<template>
  <q-page style="padding-top: 20px" class="q-pa-md">
    <q-toolbar>
      <q-btn flat round dense icon="map" />
      <q-toolbar-title>Основні налаштування</q-toolbar-title>
    </q-toolbar>
    <div class="row settings_item" v-for="(setting,n) in set" :key="n">
      <div class="col-3 flex items-center q-pa-md text-h6">{{setting.name}}</div>
      <div v-if="setting.type==='radio'" class="col-9 q-pa-md">
        <q-radio v-for="(option, index) in setting.options" :key="index" v-model="setting.value" :val="option.value" :label="option.label"  checked-icon="task_alt" unchecked-icon="panorama_fish_eye" ></q-radio>
      </div>
      <div v-if="setting.type==='range'" class="col-9  q-pa-md">
        <q-slider
          v-model="setting.value"
          marker-labels
          :min="setting.options.min"
          :max="setting.options.max"
          :step="setting.options.step"

        />
      </div><div v-if="setting.type==='mrange'" class="col-9  q-pa-md">
        <q-range
          v-model="setting.value"
          marker-labels
          :min="setting.options.min"
          :max="setting.options.max"
          :step="setting.options.step"
        />
      </div>
      <div v-if="setting.type==='select'" class="col-9  q-pa-md">
        <q-select
          filled
          v-model="setting.value"
          :options="setting.options"
          :label="setting.label"
        ></q-select>
      </div>
      <div v-if="setting.type==='mselect'" class="col-9  q-pa-md">
        <q-select
          filled
          v-model="setting.value"
          :options="setting.options"
          :label="setting.label"
          multiple
          emit-value
          map-options
        >
        </q-select>
      </div>
      <div v-if="setting.type==='toggler'" class="col-9  q-pa-md">
      <q-toggle
        :label="setting.value===true?setting.label[0]:setting.label[1]"
        v-model="setting.value"
      />
      </div>
    </div>
  </q-page>
  <q-page-scroller position="bottom">
    <q-btn fab icon="keyboard_arrow_up" color="red" />
  </q-page-scroller>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingsPage",
  components: {
  },
  data() {
    return {
      selectedOption: 'Option A',
      set:[
        {name:'Двигун', type:"radio", value:'тип 1',options:[
            {label: 'тип 1', value:1},
            {label: 'тип 2', value:2},
            {label: 'тип 3', value:3},
          ]},
        {name:'Кількість водіїв', type:"range", value:2,options:{
          min:1,
          max:8,
          step: 1
          }},
        {name:'Кількість циліндрів', type:"mrange", value:{min:2,max:4},options:{
          min:1,
          max:8
          }},
        {name:'Опціональні послуги', type:"mselect", label:'Опції', value:[],options:[
            {label: 'Кондиціонер', value:1},
            {label: 'АКП', value:2},
            {label: 'тверезий водій', value:3},
          ]},
        {name:'Потужність двигуна', type:"range", value:80,options:{
            min:60,
            max:300,
            step:40
          }},
        {name:'АКП', type:"toggler", label:['В комплекті','Відсутнє'], value:true,},
        {name:'GPS модуль', type:"toggler", label:['В комплекті','Відсутній'], value:false,},
        {
          name: 'Тип кузова',
          type: 'radio',
          value: 'Седан',
          options: [
            { label: 'Седан', value: 'Седан' },
            { label: 'Хетчбек', value: 'Хетчбек' },
            { label: 'Кроссовер', value: 'Кроссовер' },
          ],
        },
        {
          name: 'Тип палива',
          type: 'select',
          value: 'Бензин',
          options: [
            { label: 'Бензин', value: 'Бензин' },
            { label: 'Дизель', value: 'Дизель' },
            { label: 'Гібрид', value: 'Гібрид' },
            { label: 'Електро', value: 'Електро' },
          ],
        },
      ]}
  }
});
</script>

<style>
.settings_item .col-3{

}
</style>
