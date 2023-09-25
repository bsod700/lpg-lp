// ToDo: refactor errors
export interface ContactForm {
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
