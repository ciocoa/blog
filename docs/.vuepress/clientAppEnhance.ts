import { addIcons } from 'oh-vue-icons'
import { defineClientAppEnhance } from '@vuepress/client'
import About from './components/About.vue'
import {
  HiSolidHome,
  HiSolidTag,
  HiSolidLink,
  FaCat,
  RiVuejsLine,
  FaPaw,
  OiRocket,
  RiBilibiliFill,
  RiGithubFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
  RiTelegramFill,
  LaGithubAlt
} from 'oh-vue-icons/icons'

addIcons(
  HiSolidHome,
  HiSolidTag,
  HiSolidLink,
  FaCat,
  RiVuejsLine,
  FaPaw,
  OiRocket,
  RiBilibiliFill,
  RiGithubFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
  RiTelegramFill,
  LaGithubAlt
)

export default defineClientAppEnhance(({ app }) => {
  app.component('About', About)
})
