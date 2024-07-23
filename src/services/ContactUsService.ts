import { ContactUsType } from "src/types/contactUs";
import { GfHttp } from "./HttpServices";

export function AddNewContactUs(data : ContactUsType) {
    return GfHttp.post("/forms/2/submissions", data).then((data) => data);
  }
  export function GetContactUs() {
    return GfHttp.get("/forms").then((res) => console.log(res));
  }