<script setup lang="ts" generic="TFormType extends z.ZodType">
import {
  AppButton,
  AppKeyboardCommand,
  AppTooltip,
  Icon,
  useKeyboardCommand,
} from '@wisemen/vue-core'
import type { Form } from 'formango'
import { computed, ref } from 'vue'
import type { z } from 'zod'

import { onCreated } from '@/utils/createdHook.util'

const props = withDefaults(defineProps<{
  form: Form<TFormType>
  formId?: null | string
  iconRight?: Icon | null
  isAlwaysEnabled?: boolean
  isDisabled?: boolean
  isKeyboardCommandDisabled?: boolean
  size?: 'default' | 'lg'
}>(), {
  formId: null,
  iconRight: null,
  isAlwaysEnabled: false,
  isDisabled: false,
  isKeyboardCommandDisabled: false,
  size: 'default',
})

const buttonRef = ref<InstanceType<typeof AppButton> | null>(null)

const isButtonDisabled = computed<boolean>(() => {
  if (props.isDisabled) {
    return true
  }

  if (!props.isAlwaysEnabled) {
    return !(props.form.isDirty as boolean)
  }

  return false
})

function initKeyboardCommand(): void {
  if (props.isKeyboardCommandDisabled) {
    return
  }

  useKeyboardCommand({
    command: {
      keys: [
        'ctrl',
        's',
      ],
      onPressed: () => {
        if (props.form.isDirty) {
          buttonRef.value?.$el.click()
        }
      },
      type: 'combination',
    },
    scope: 'global',
  })
}

onCreated(() => {
  initKeyboardCommand()
})
</script>

<template>
  <div class="w-full">
    <AppTooltip
      :is-hidden="props.isKeyboardCommandDisabled"
      :disable-hoverable-content="true"
      :delay-duration="300"
      side="bottom"
    >
      <AppButton
        ref="buttonRef"
        :size="props.size"
        :icon-right="props.iconRight"
        :form="props.formId"
        :is-disabled="isButtonDisabled"
        :is-loading="props.form.isSubmitting"
        type="submit"
        class="w-full border-[#e08264] bg-[#e08264]"
      >
        <slot />
      </AppButton>

      <template #content>
        <div class="px-3 py-2">
          <AppKeyboardCommand
            v-if="!props.isKeyboardCommandDisabled"
            :keys="['ctrl', 's']"
            :has-border="true"
            command-type="combination"
          />
        </div>
      </template>
    </AppTooltip>
  </div>
</template>,
