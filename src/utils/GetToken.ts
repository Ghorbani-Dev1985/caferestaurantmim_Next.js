export default async function GetToken(){
    const getToken = await JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("user") : false);
    console.log(getToken)
    return getToken
}