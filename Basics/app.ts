let userInput: unknown; //better than any
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(msg: string, code: number): never{
  throw { message: msg, errorCode: code };
  //while(true){}
}//never return anything

generateError('An error occured', 500);