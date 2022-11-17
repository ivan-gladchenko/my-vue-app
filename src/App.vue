<script lang="ts">
import { ref } from 'vue';
import { Script, IStepAnswer } from './models/script';

export default {
  setup() {
    return {
      stepModel: ref(1),
      script: Script,
    };
  },
  methods: {
    approve(answers: IStepAnswer[]) {
      this.stepModel = answers.find((x) => x.rejection == null)!.next_step;
    },
    reject(answers: IStepAnswer[]) {
      this.stepModel = answers.find((x) => x.rejection != null)!.next_step;
    },
  },
};
</script>

<template>
  <q-stepper
    class="stepper"
    v-model="stepModel"
    vertical
    color="primary"
    animated
    active-icon="check"
    active-color="orange"
  >
    <div v-for="step in script.steps">
      <q-step
        :name="step.step_index"
        :title="step.title"
        icon="check"
        :done="stepModel > step.step_index + 1"
      >
        <q-field borderless label="Client text" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">
              {{ step.client_text }}
            </div>
          </template>
        </q-field>
        <q-field borderless label="Note" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">
              {{ step.note }}
            </div>
          </template>
        </q-field>
        <div class="buttons-panel">
          <div v-if="step.photo_types.length != 0" class="make-photo">
            <q-btn
              unelevated
              class="act-button"
              size="md"
              flat
              icon="camera_alt"
            />
          </div>
          <q-stepper-navigation class="accept-reject-buttons">
            <q-btn
              unelevated
              class="act-button"
              size="sm"
              round
              @click="reject(step.step_answers)"
              color="red"
              icon="clear"
            />
            <q-btn
              unelevated
              class="act-button"
              size="sm"
              round
              @click="approve(step.step_answers)"
              color="green"
              icon="check"
            />
          </q-stepper-navigation>
        </div>
      </q-step>
    </div>
  </q-stepper>
</template>

<style scoped>
.stepper {
  width: 400px;
}

.buttons-panel {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.make-photo {
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 8px;
  background: #f4f4f4;
}

.accept-reject-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  background: #f4f4f4;
}
</style>
