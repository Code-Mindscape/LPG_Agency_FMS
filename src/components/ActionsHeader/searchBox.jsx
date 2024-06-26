import { Button } from "@/components/ui/button"
import { Input } from "@/components/ActionsHeader/input"

export function InputWithButton() {
  return (
    <div className="flex w-[600px] max-w-sm items-center space-x-2">
      <Input type="search" placeholder="search users" />
      <Button type="submit">search</Button>
    </div>
  )
}
