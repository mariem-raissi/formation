import { ResolveFn } from "@angular/router";
export const resolvepost :ResolveFn <any>=async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data =await response.json();
    return data[0];

}