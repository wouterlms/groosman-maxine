<script setup lang="ts">
import { AppIcon } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

import AppForm from '@/components/form/form/AppForm.vue'
import AppFormSubmitButton from '@/components/form/form/AppFormSubmitButton.vue'

import EmailInput from './EmailInput.vue'

const { form } = useForm({
  schema: z.object({
    email: z.string().email(),
  }),
})

const email = form.register('email')
</script>

<template>
  <div class="flex flex-1 flex-col bg-[#eeecde] md:p-6 lg:p-12 xl:p-24">
    <div class="grid h-full flex-1 gap-x-12 overflow-hidden bg-background shadow-lg md:grid-cols-[1fr,1.3fr] md:rounded-3xl">
      <div class="px-8 py-12 lg:max-w-xl lg:px-16">
        <div class="w-32">
          <AppIcon
            icon="logo"
            size="full"
          />
        </div>

        <h1 class="mt-12 font-serif text-[2rem] font-bold leading-tight text-secondary xl:text-hero xl:leading-tight">
          Weet als eerste wanneer we lanceren
        </h1>

        <h2 class="mt-6 leading-7 text-[#eeecde]">
          We zijn bijna klaar om te lanceren, meld je aan om op de hoogte te blijven.
        </h2>

        <AppForm
          :form="form"
          class="h-auto"
        >
          <EmailInput
            v-bind="email"
            label="Je e-mailadres"
            class="mt-8"
          />

          <div class="flex">
            <AppFormSubmitButton
              :is-keyboard-command-disabled="true"
              :form="form"
              icon-right="send"
              class="mt-3 !w-auto"
            >
              <span class="whitespace-nowrap p-2">
                Inschrijven
              </span>
            </AppFormSubmitButton>
          </div>
        </AppForm>
      </div>

      <div class="hidden rounded-2xl md:block md:p-2">
        <img
          src="@/assets/images/main-image.jpeg"
          class="md:rounded-r-[1.15rem]"
        >
      </div>
    </div>
  </div>
</template>
