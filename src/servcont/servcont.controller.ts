import { Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { CatService } from 'src/cat/cat.service';

@Controller('cats')
export class ServcontController {

constructor(private catservice : CatService){}

@Post('/addcat') 
  addCat(): string {
    return this.catservice.addcat();
  }

  //delete book
  @Delete('/deletecat')
  deleteCat(): string {
    return this.catservice.deletecat();
  }

  // update book
  @Put('/updatecat')
  updateCat(): string {
    return this.catservice.updatecat();
  }

  // find all book
  @Get('/findallcat')
   @Redirect("https://github.com/mehboobpatel")
  findAllCat(): string {
    return this.catservice.findAllcat();
  }

  @Get('/findcatbyid/:catid')
  findCatbyid(@Param('catid') custobj: any): string {
    // here @Param is a builtin function custobj is the object and any is the type
    //@Params is the  decorator used to extract route parameters from the URL.
    // custobj its the parameter/variable that will hold the extracted value
    // : any means its not expelctly defined it can be of any type
    console.log(custobj);
    return this.catservice.findbatbyid(custobj);


}
  }

    

