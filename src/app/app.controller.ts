import { Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';

@Controller('Book')  //defining the url
                     //localhost:3000/Book   
export class AppController {
  //addBook
@Post('/add') //defining the url request
              //localhost:3000/Book/add
  addBook(): string {
    return 'this will add book';
  }
  
  //delete book
  @Delete('/delete')
  deleteBook(): string {
    return 'this will delete book';
  }

  // update book
  @Put('/update')
  updateBook(): string {
    return 'this will update book';
  }

// find all book
  @Get('/findall')
  @Redirect("https://www.linkedin.com/in/maheboob-patel/")
  findAllBook(): string {
    return 'this will Find all book';
  }

  @Get('/findbookbyid/:bookid')
findbookbyid(@Param() custobj: any): string { 
    // here @Param is a builtin function custobj is the object and any is the type
    //@Params is the  decorator used to extract route parameters from the URL.
    // custobj its the parameter/variable that will hold the extracted value
    // : any means its not expelctly defined it can be of any type
  console.log(custobj.bookid);
  return `This action returns the #${custobj.bookid} cat`;
}

}
