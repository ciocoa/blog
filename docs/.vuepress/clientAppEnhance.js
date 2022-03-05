import { addIcons } from 'oh-vue-icons'
import { defineClientAppEnhance } from '@vuepress/client'
import { FaFortAwesome, FaTag, FaSatelliteDish, OiRocket, RiVuejsLine, RiBilibiliLine } from 'oh-vue-icons/icons'

addIcons(FaFortAwesome, FaTag, FaSatelliteDish, OiRocket, RiVuejsLine, RiBilibiliLine)
export default defineClientAppEnhance(() => {})
