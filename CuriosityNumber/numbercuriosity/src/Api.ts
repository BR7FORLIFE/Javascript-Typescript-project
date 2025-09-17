export interface ResponseApi{
    text:string;
    number: string;
    readonly type:"math";
    readonly found: true;
}

export async function getAllRandomCuriosity(): Promise<ResponseApi|undefined>{
    try{
        const req = await fetch("http://numbersapi.com/random/math?json");
        const data: ResponseApi =  await req.json()
        return data
    }catch (error){
        console.error("feching data error: ", error)
    }
}