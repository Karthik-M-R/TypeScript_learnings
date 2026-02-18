let subs:number | string='1M'; //union, here subs can be num or string 

//other eg of union

let apiReqStatus:'pending'|'sucess' |'error'='pending'  ;
apiReqStatus='sucess';
// apiReqStatus='done'; cant use only 'pending'|'sucess' |'error'
const orders=['21','22','23'];
let currentorder: string | undefined;

for(let o of orders)
{
    if(o=='23')
    {
        currentorder=o;
        break;
    }
  currentorder='13';

}
console.log(currentorder);