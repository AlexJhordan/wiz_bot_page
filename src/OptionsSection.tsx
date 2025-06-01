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

const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
export const GameplaySettings = () => {
  const { checkbox } = settings.gameplaySettings
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>{labelSettings[2]}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
      <AccordionContent className={gridClasses}>
        <Input placeholder="Pick a Skin" className="md:col-span-2" />
        <Input placeholder="Custom ID Skin" className="md:col-span-2" />
        <Button variant="outline" className="w-fit">
          Skin Preview
        </Button>
        <p className="text-xs text-muted-foreground md:col-span-2 lg:col-span-4">
          Want to record the video with your own skin? Check out the skin uploader over on the Skins
          page!
        </p>
        <div className="lg:col-span-2">
          {checkbox.map((option, index) => (
            <label key={index} className="flex items-center gap-2">
              <Checkbox />
              {option}
            </label>
          ))}
        </div>
        <RadioGroup defaultValue="option-one" className="gap-0">
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
      <AccordionContent className={gridClasses}>
        {checkbox.map((option, index) => {
          if (index === 1) {
            return (
              <>
                <label key={index} className="flex items-center gap-2">
                  <Checkbox />
                  {option}
                </label>
                <div className="flex flex-col items-start gap-2 row-start-2 md:col-span-2 lg:col-span-4">
                  <label htmlFor="cursorSizeLabel" className="whitespace-nowrap">
                    {slider}
                  </label>
                  <Slider
                    id="cursorSizeLabel"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="lg:w-1/4"
                  />
                </div>
                <p className="md:col-span-2 lg:col-span-4">
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
      <AccordionContent className={gridClasses}>
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
      <AccordionContent className={gridClasses}>
        {checkbox.map((option, index) => {
          if (index === 1) {
            return (
              <>
                <label key={index} className="flex items-center gap-2">
                  <Checkbox />
                  {option}
                </label>
                <div className="flex flex-col items-start gap-2 row-start-2 md:col-span-2 lg:col-span-4">
                  <label htmlFor="cursorSizeLabel" className="whitespace-nowrap">
                    {slider}
                  </label>
                  <Slider
                    id="cursorSizeLabel"
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    className="lg:w-1/4"
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
        <p className="lg:col-span-4">
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
      <AccordionContent className={gridClasses}>
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
