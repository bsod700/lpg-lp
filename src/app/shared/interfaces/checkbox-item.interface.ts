import { FormControl } from "@angular/forms";
import { Img } from "@bsod700/lib";

export interface CheckboxItem {
    label: string;
    icon: {
        active: Img,
        inactive: Img
    }
    control: FormControl;
}
