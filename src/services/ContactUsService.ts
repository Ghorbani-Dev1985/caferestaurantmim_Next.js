import { ContactUsType } from "src/types/contactUs";
import { GfHttp } from "./HttpServices";

export function AddNewContactUs(data : ContactUsType) {
    return GfHttp.post("/forms/2/submissions", data).then((res) => console.log(res));
  }
  export function GetContactUs() {
    return GfHttp.get("/forms").then((res) => console.log(res));
  }