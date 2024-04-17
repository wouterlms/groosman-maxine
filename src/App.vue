<script setup lang="ts">
import {
  AppDialogContainer,
  AppToastContainer,
} from '@wisemen/vue-core'

import AppPageLoader from '@/components/app/loader/AppPageLoader.vue'
import LandingPageView from '@/views/LandingPageView.vue'

import { useDocumentTitle } from './composables/document-title/documentTitle.composable'
import { useRefreshPrompt } from './composables/refresh-prompt/refreshPrompt.composable'

const { setTemplate } = useDocumentTitle()

useRefreshPrompt()

setTemplate('{title} | App')
</script>

<template>
  <LandingPageView />
  <AppPageLoader />
  <AppDialogContainer />
  <AppToastContainer />
</template>
