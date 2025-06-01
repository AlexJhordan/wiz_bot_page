import {
  IconBlocks,
  IconDeviceDesktopFilled,
  IconDeviceGamepad3,
  IconDots,
  IconPaletteFilled,
  IconPointerFilled,
  IconSettingsFilled,
} from "@tabler/icons-react"
import { t } from "@lingui/core/macro"

export const settings = {
  generalSettings: {
    label: t`General Settings`,
    icon: <IconSettingsFilled size={16} />,
    checkbox: [],
  },
  gameplaySettings: {
    label: t`Gameplay Settings`,
    icon: <IconDeviceGamepad3 size={16} />,
    checkbox: [
      { name: "showHitErrorMeter", label: t`Show hit error meter` },
      { name: "showUnstableRate", label: t`Show unstable rate` },
      { name: "showScore", label: t`Show score` },
      { name: "showHpBar", label: t`Show HP bar` },
      { name: "showComboCounter", label: t`Show combo counter` },
      { name: "showPpCounter", label: t`Show PP counter` },
      { name: "showKeyOverlay", label: t`Show key overlay` },
      { name: "showScoreboard", label: t`Show scoreboard` },
      { name: "showAvatarsOnScoreboard", label: t`Show avatars on scoreboard` },
      { name: "showBorders", label: t`Show borders` },
      { name: "showMods", label: t`Show mods` },
      { name: "showResultScreen", label: t`Show result screen` },
      { name: "showHitCounter", label: t`Show hit counter` },
      { name: "showSliderBreaks", label: t`Show slider breaks` },
      { name: "showAimErrorMeter", label: t`Show aim error meter` },
      { name: "showStrainGraph", label: t`Show strain graph` },
    ],
  },
  skinSettings: {
    label: t`Skin Settings`,
    icon: <IconPaletteFilled size={16} />,
    checkbox: [
      { name: "useSkinCursor", label: t`Use skin cursor` },
      { name: "useSkinHitsounds", label: t`Use skin hitsounds` },
    ],
    radioGroup: [
      { value: "useSkinComboColors", label: t`Use skin combo colors` },
      { value: "useBeatmapComboColors", label: t`Use beatmap combo colors` },
    ],
    input: [
      { id: "skin", placeholder: t`Pick a Skin` },
      { id: "customSkin", placeholder: t`Custom ID Skin` },
    ],
  },
  cursorSettings: {
    label: t`Cursor Settings`,
    icon: <IconPointerFilled size={16} />,
    checkbox: [
      { name: "cursorRipples", label: t`Cursor ripples` },
      { name: "cursorTrail", label: t`Cursor trail` },
      { name: "rainBow", label: t`Rainbow` },
      { name: "trailGlow", label: t`Trail glow` },
    ],
    slider: { name: "cursorSize", label: t`Cursor size` },
  },
  objectsSettings: {
    label: t`Objects Settings`,
    icon: <IconBlocks size={16} />,
    checkbox: [
      { name: "drawFollowPoints", label: t`Draw follow points` },
      { name: "showComboNumbers", label: t`Show combo numbers` },
      { name: "scaleToTheBeat", label: t`Scale to the beat` },
      { name: "rainbow", label: t`Rainbow` },
      { name: "flashToTheBeat", label: t`Flash to the beat` },
      { name: "useHitCircleColor", label: t`Use hit circle color` },
      { name: "mergeSliders", label: t`Merge sliders` },
      { name: "sliderSnakingIn", label: t`Slider snaking in` },
      { name: "sliderSnakingOut", label: t`Slider snaking out` },
    ],
  },
  videoSettings: {
    label: t`Video Settings`,
    icon: <IconDeviceDesktopFilled size={16} />,
    checkbox: [
      { name: "motionBlur", label: t`Motion blur` },
      { name: "addPitchToTheMusic", label: t`Add pitch to the music` },
      { name: "neverDeleteTheVideo", label: t`Never delete the video` },
    ],
    slider: { name: "motionBlurFps", label: t`Motion blur FPS` },
  },
  otherSettings: {
    label: t`Other Settings`,
    icon: <IconDots size={16} />,
    checkbox: [
      { name: "drawFollowPoints", label: t`Draw follow points` },
      { name: "showComboNumbers", label: t`Show combo numbers` },
      { name: "scaleToTheBeat", label: t`Scale to the beat` },
      { name: "rainbow", label: t`Rainbow` },
      { name: "flashToTheBeat", label: t`Flash to the beat` },
      { name: "useHitCircleColor", label: t`Use hit circle color` },
      { name: "mergeSliders", label: t`Merge sliders` },
      { name: "sliderSnakingIn", label: t`Slider snaking in` },
      { name: "sliderSnakingOut", label: t`Slider snaking out` },
    ],
  },
} as const
