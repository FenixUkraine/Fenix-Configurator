<template>
  <div>
    <div class="chart-container">
      <div class="chart"></div>
      <draggable v-model="points" :options="{ handle: '.point' }">
        <div v-for="(point, index) in points" :key="index" class="point" :style="{ left: point.x + 'px', top: point.y + 'px' }"></div>
      </draggable>
    </div>
    <q-btn label="Add Point" @click="addPoint" />
  </div>
</template>

<script>
import { QBtn,} from 'quasar'
import draggable from 'vuedraggable'

export default {
  name: 'ChartWithPoints',
  components: {
    draggable,
    QBtn,
  },
  data () {
    return {
      points: [
        { x: 50, y: 50 },
        { x: 100, y: 100 },
        { x: 150, y: 150 }
      ]
    }
  },
  methods: {
    addPoint () {
      this.points.push({ x: 0, y: 0 })
    }
  }
}
</script>

<style>
.chart-container {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
}

.chart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.point {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #007aff;
  border-radius: 50%;
  cursor: pointer;
}
</style>
