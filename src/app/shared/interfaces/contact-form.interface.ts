// ToDo: refactor errors
export interface ContactForm {
  checkboxes: {
    text: string,
    labels: checkboxLabel[],
    error: string
  },
  name: {
      text: string,
      lable: string,
      error: string
  },
  email: {
    text: string,
    lable: string,
    error: string,
    error2: string
  },
  phone: {
    text: string,
    lable: string,
    error: string
  },
  submit: string
}

interface checkboxLabel {
  imgName: string,
  text: string
}
