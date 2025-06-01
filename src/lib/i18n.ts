import { i18n } from "@lingui/core"
import { messages as enMessages } from "@/locales/en/messages"
import { messages as ptMessages } from "@/locales/pt/messages"
import { messages as esMessages } from "@/locales/es/messages"

i18n.load({
  en: enMessages,
  pt: ptMessages,
  es: esMessages,
})
i18n.activate("en")

export default i18n
