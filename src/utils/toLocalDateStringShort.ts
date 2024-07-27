export default function ToLocalDateStringShort(date : string){
    return new Date(date).toLocaleDateString("fa-IR" , { month: "2-digit",
        day: "2-digit",
        year: "numeric",})
}