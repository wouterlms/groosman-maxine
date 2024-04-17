<script setup lang="ts">
import { FormElement, FormFieldErrors } from '@wisemen/vue-core'

const props = withDefaults(defineProps<{
  errors: FormFieldErrors
  isTouched: boolean
  label: string
}>(), {})

const model = defineModel<null | string>({
  required: true,
})
</script>

<template>
  <FormElement
    v-slot="{ isInvalid }"
    :errors="props.errors"
    :label="null"
    :is-disabled="false"
    :is-touched="props.isTouched"
    :is-required="false"
  >
    <input
      v-model="model"
      :class="[isInvalid ? 'border-destructive' : 'border-input focus:border-primary']"
      class="block w-full rounded-md border border-solid  p-3 text-sm outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 focus-visible:ring-ring"
      placeholder="Jouw e-mailadres"
      type="email"
    >
  </FormElement>
</template>
