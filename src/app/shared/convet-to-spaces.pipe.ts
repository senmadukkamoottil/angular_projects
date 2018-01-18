//import { Pipe } from "@angular/core/src/metadata/directives";
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string{
        return value.replace(character, ' ');
    }
} 