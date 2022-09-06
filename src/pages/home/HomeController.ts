export default function GetTime (date: Date): number {
  return 0
}
export function GetDate (date: Date): number {
  return 0
}

export interface ISubmitTodoForm {
  name: string
  isStartNow?: boolean
  duration?: Date
  timeStart?: Date
  timeEnd?: Date
}
