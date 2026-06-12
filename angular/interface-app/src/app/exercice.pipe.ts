import { Pipe,PipeTransform } from "@angular/core";
@Pipe ({
    name:'reverse',
    standalone:true
})
export class Exercicepipe implements PipeTransform{
transform(value:string):string {
     return value.split('').reverse().join('');
} 
}