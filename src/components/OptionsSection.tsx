import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "./ui/slider"
import { settings } from "@/const/renderSettings"
import { Trans } from "@lingui/react/macro"
import { Label } from "./ui/label"
import { cn } from "@/lib/utils"

const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"

export const GameplaySettings = () => {
  const { checkbox, label, icon } = settings.gameplaySettings
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {checkbox.map((option, index) => (
          <span key={index} className="flex gap-2 items-center *:cursor-pointer">
            <Checkbox name={option.name} id={option.name} />
            <Label htmlFor={option.name}>{option.label}</Label>
          </span>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export const SkinSettings = () => {
  const { checkbox, radioGroup, label, icon, input } = settings.skinSettings

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {input.map((option, index) => (
          <Input
            key={index}
            placeholder={option.placeholder}
            id={option.id}
            className="md:col-span-2"
          />
        ))}
        <Button variant="outline" className="w-fit">
          <Trans>Skin Preview</Trans>
        </Button>
        <p className="text-xs text-muted-foreground md:col-span-2 lg:col-span-4">
          <Trans>
            Want to record the video with your own skin? Check out the skin uploader over on the
            Skins page!
          </Trans>
        </p>
        <div className="lg:col-span-2 grid gap-4">
          {checkbox.map((option, index) => (
            <span key={index} className="flex gap-2 items-center *:cursor-pointer">
              <Checkbox name={option.name} id={option.name} />
              <Label htmlFor={option.name}>{option.label}</Label>
            </span>
          ))}
        </div>
        <RadioGroup defaultValue={radioGroup[0].value} className="lg:col-span-2 gap-4">
          {radioGroup.map((option, index) => (
            <span key={index} className="flex items-center gap-2 *:cursor-pointer">
              <RadioGroupItem value={option.value} id={option.value} />
              <label htmlFor={option.value}>{option.label}</label>
            </span>
          ))}
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  )
}

export const CursorSettings = () => {
  const { checkbox, slider, label, icon } = settings.cursorSettings
  return (
    <AccordionItem value="item-4">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {checkbox.map((option, index) => {
          return (
            <>
              <span key={index} className="flex gap-2 items-center *:cursor-pointer">
                <Checkbox name={option.name} id={option.name} />
                <Label htmlFor={option.name}>{option.label}</Label>
              </span>
              {index === 1 && (
                <div key={index + 1} className={cn(gridClasses, "md:col-span-2 lg:col-span-4")}>
                  <p id="cursorSizeLabel" className="whitespace-nowrap">
                    {slider.label}
                  </p>
                  <Slider
                    aria-labelledby="cursorSizeLabel"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="col-span-2 row-start-2"
                  />
                  <p className="text-xs text-muted-foreground row-start-3 md:col-span-2 lg:col-span-4">
                    <Trans>
                      These options only take effect if "Use skin cursor" is not checked.
                    </Trans>
                  </p>
                </div>
              )}
            </>
          )
        })}
      </AccordionContent>
    </AccordionItem>
  )
}

export const ObjectSettings = () => {
  const { checkbox, label, icon } = settings.objectsSettings
  return (
    <AccordionItem value="item-5">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {checkbox.map((option, index) => (
          <span key={index} className="flex gap-2 items-center *:cursor-pointer">
            <Checkbox name={option.name} id={option.name} />
            <Label htmlFor={option.name}>{option.label}</Label>
          </span>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export const VideoSettings = () => {
  const { checkbox, slider, label, icon } = settings.videoSettings
  return (
    <AccordionItem value="item-6">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {checkbox.map((option, index) => (
          <>
            <span key={index} className="flex gap-2 items-center *:cursor-pointer">
              <Checkbox name={option.name} id={option.name} />
              <Label htmlFor={option.name}>{option.label}</Label>
            </span>
            {index === 0 && (
              <div key={index + 1} className={cn(gridClasses, "md:col-span-2 lg:col-span-4")}>
                <p id="motionBlurFps" className="whitespace-nowrap md:col-span-2 lg:col-span-4">
                  {slider.label}
                </p>
                <Slider
                  aria-labelledby="motionBlurFps"
                  defaultValue={[60]}
                  max={100}
                  step={1}
                  className="md:col-span-2"
                />
              </div>
            )}
          </>
        ))}
        <p className="text-xs text-muted-foreground md:col-span-2 lg:col-span-4">
          <Trans>
            If you use o!rdr to make YouTube videos, please credit the website{" "}
            <a href="https://ordr.issou.best" className="text-foreground/80 hover:underline">
              ( ordr.issou.best )
            </a>{" "}
            in the video description!
          </Trans>
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}

export const OtherSettings = () => {
  const { checkbox, label, icon } = settings.otherSettings
  return (
    <AccordionItem value="item-7">
      <AccordionTrigger className="cursor-pointer text-lg font-bold gap-2 py-2 px-4 rounded-full">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(gridClasses, "p-4")}>
        {checkbox.map((option, index) => (
          <span key={index} className="flex gap-2 items-center *:cursor-pointer">
            <Checkbox name={option.name} id={option.name} />
            <Label htmlFor={option.name}>{option.label}</Label>
          </span>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
