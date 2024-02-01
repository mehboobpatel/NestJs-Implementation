import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class CatService {

    addcat(): string {
        return 'this will add cat';
    }

    deletecat(): string {
        return 'this will delete cat';
    }

    updatecat(): string {
        return 'this will update cat';
    }

    findAllcat(): string {
        return 'this will Find all cat';
    }

    findbatbyid(batid: string): string {
        // here @Param is a builtin function custobj is the object and any is the type
        //@Params is the  decorator used to extract route parameters from the URL.
        // custobj its the parameter/variable that will hold the extracted value
        // : any means its not expelctly defined it can be of any type
        console.log(batid);
        return `This action returns the #${batid} cat`;
    }


}
