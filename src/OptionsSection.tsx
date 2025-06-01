import { AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Button } from "./components/ui/button"
import { Checkbox } from "./components/ui/checkbox"
import { Input } from "./components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "./components/ui/slider"

const labelSettings = {
  1: "General Settings",
  2: "Gameplay Settings",
  3: "Skin Settings",
  4: "Cursor Settings",
  5: "Objects Settings",
  6: "Video Settings",
  7: "Other Settings",
}
const settings = {
  gameplaySettings: {
    checkbox: [
      "showHitErrorMeter",
      "showUnstableRate",
      "showScore",
      "showHpBar",
      "showComboCounter",
      "showPpCounter",
      "showKeyOverlay",
      "showScoreboard",
      "showAvatarsOnScoreboard",
      "showBorders",
      "showMods",
      "showResultScreen",
      "showHitCounter",
      "showSliderBreaks",
      "showAimErrorMeter",
      "showStrainGraph",
    ],
  },
  skinSettings: {
    checkbox: ["useSkinCursor", "useSkinHitsounds"],
    radioGroup: ["useSkinComboColors", "useBeatmapComboColors"],
  },
  cursorSettings: {
    checkbox: ["cursorRipples", "cursorTrail", "rainBow", "trailGlow"],
    slider: ["cursorSize"],
  },
  objectsSettings: {
    checkbox: [
      "drawFollowPoints",
      "showComboNumbers",
      "scaleToTheBeat",
      "rainbow",
      "flashToTheBeat",
      "useHitCircleColor",
      "mergeSliders",
      "sliderSnakingIn",
      "sliderSnakingOut",
    ],
  },
  videoSettings: {
    checkbox: ["motionBlur", "addPitchToTheMusic", "neverDeleteTheVideo"],
    slider: ["motionBlurFps"],
  },
  otherSettings: {
    checkbox: [
      "drawFollowPoints",
      "showComboNumbers",
      "scaleToTheBeat",
      "rainbow",
      "flashToTheBeat",
      "useHitCircleColor",
      "mergeSliders",
      "sliderSnakingIn",
      "sliderSnakingOut",
    ],
  },
} as const
export const GameplaySettings = () => {
  const { checkbox } = settings.gameplaySettings
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>{labelSettings[2]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-4 gap-2">
        {checkbox.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <Checkbox />
            {option}
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export const SkinSettings = () => {
  const { checkbox, radioGroup } = settings.skinSettings

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>{labelSettings[3]}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <Input placeholder="Pick a Skin" />
          <Input placeholder="Custom ID Skin" />
        </div>
        <Button variant="outline" className="w-fit">
          Skin Preview
        </Button>
        <p className="text-xs text-muted-foreground">
          Want to record the video with your own skin? Check out the skin uploader over on the Skins
          page!
        </p>
        <div className="grid grid-cols-2 gap-2">
          {checkbox.map((option, index) => (
            <label key={index} className="flex items-center gap-2">
              <Checkbox />
              {option}
            </label>
          ))}
        </div>
        <RadioGroup defaultValue="option-one" className="grid grid-cols-2 gap-2">
          {radioGroup.map((option, index) => (
            <label key={index} className="flex items-center gap-2">
              <RadioGroupItem value={option} />
              {option}
            </label>
          ))}
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  )
}

export const CursorSettings = () => {
  const { checkbox, slider } = settings.cursorSettings
  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>{labelSettings[4]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-4 gap-2">
        {checkbox.map((option, index) => {
          if (index === 1) {
            return (
              <>
                <label key={index} className="flex items-center gap-2">
                  <Checkbox />
                  {option}
                </label>
                <div className="flex flex-col items-start gap-2 row-start-2">
                  <label htmlFor="cursorSizeLabel" className="whitespace-nowrap">
                    {slider}
                  </label>
                  <Slider
                    id="cursorSizeLabel"
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    className="w-9/10"
                  />
                </div>
                <p className="col-span-4">
                  These options only take effect if "Use skin cursor" is not checked.
                </p>
              </>
            )
          }
          return (
            <label key={index} className="flex items-center gap-2">
              <Checkbox />
              {option}
            </label>
          )
        })}
      </AccordionContent>
    </AccordionItem>
  )
}

export const ObjectSettings = () => {
  const { checkbox } = settings.objectsSettings
  return (
    <AccordionItem value="item-5">
      <AccordionTrigger>{labelSettings[5]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-4 gap-2">
        {checkbox.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <Checkbox />
            {option}
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
export const VideoSettings = () => {
  const { checkbox, slider } = settings.videoSettings
  return (
    <AccordionItem value="item-6">
      <AccordionTrigger>{labelSettings[6]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-4 gap-2">
        {checkbox.map((option, index) => {
          if (index === 1) {
            return (
              <>
                <label key={index} className="flex items-center gap-2">
                  <Checkbox />
                  {option}
                </label>
                <div className="flex flex-col items-start gap-2 row-start-2">
                  <label htmlFor="cursorSizeLabel" className="whitespace-nowrap">
                    {slider}
                  </label>
                  <Slider
                    id="cursorSizeLabel"
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    className="w-9/10"
                  />
                </div>
              </>
            )
          }
          return (
            <label key={index} className="flex items-center gap-2">
              <Checkbox />
              {option}
            </label>
          )
        })}
        <p className="col-span-4">
          If you use o!rdr to make YouTube videos, please credit the website (
          <a href="https://ordr.issou.best">ordr.issou.best</a>) in the video description!
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}

export const OtherSettings = () => {
  const { checkbox } = settings.otherSettings
  return (
    <AccordionItem value="item-7">
      <AccordionTrigger>{labelSettings[7]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-4 gap-2">
        {checkbox.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <Checkbox />
            {option}
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
