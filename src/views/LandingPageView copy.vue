<script setup lang="ts">
import {
  AppIcon,
  AppText,
} from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

import AppForm from '@/components/form/form/AppForm.vue'
import AppFormSubmitButton from '@/components/form/form/AppFormSubmitButton.vue'

const { form } = useForm({
  schema: z.object({
    email: z.string().email(),
  }),
})

const email = form.register('email')
</script>

<template>
  <div class="grid grid-cols-2 gap-x-12">
    <div class="mx-auto flex max-w-lg flex-col px-8 py-36">
      <div class="w-40">
        <AppIcon
          icon="logo"
          size="full"
        />
      </div>

      <AppText
        variant="hero"
        class="mt-16 leading-tight text-primary"
      >
        Weet als eerste wanneer we lanceren
      </AppText>

      <AppText
        variant="heading"
        class="mt-8"
      >
        We zijn bijna klaar om te lanceren, meld je aan om op de hoogte te blijven.
      </AppText>

      <AppForm :form="form">
        <div class="mt-10 flex gap-x-2">
          <!-- <FormInput
            v-bind="email"
            :is-touched="form.hasAttemptedToSubmit"
            label="Je e-mailadres"
            class="input w-full"
          /> -->

          <AppFormSubmitButton
            :is-keyboard-command-disabled="true"
            :form="form"
            class="mt-[22px] !w-auto"
          >
            <span class="whitespace-nowrap">
              Verzenden
            </span>
          </AppFormSubmitButton>
        </div>
      </AppForm>
    </div>

    <img
      src="@/assets/images/main-image.jpeg"
      class="h-screen"
    >
  </div>
</template>

<style>
.input {
  /* --input: 0, 0, 0; */
}
</style>
