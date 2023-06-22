import toast from 'react-hot-toast'

export enum AlertType {
  info = 'info',
  error = 'error',
  warning = 'warning',
  success = 'success',
  question = 'question'
}

export enum AlertPosition {
  bottomRight = 'bottom-right',
  bottomLeft = 'bottom-left',
  topRight = 'top-right',
  topLeft = 'top-left',
  topCenter = 'top-center',
  bottomCenter = 'bottom-center'
}

export class AlertButtons {
  yesText: string
  noText: string
  constructor(newItem?: AlertButtons) {
    this.yesText = newItem?.yesText ?? 'Yes'
    this.noText = newItem?.yesText ?? 'No'
  }
}

export const defaultPosition = AlertPosition.bottomCenter

const errorAlert = (message: string) => {
  toast.error(message, {
    position: defaultPosition
  })
}

const successAlert = (message: string) => {
  toast.success(message, {
    position: defaultPosition
  })
}

export { errorAlert, successAlert }
