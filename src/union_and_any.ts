let subs:number | string='1M'; //union, here subs can be num or string 

//other eg of union

let apiReqStatus:'pending'|'sucess' |'error'='pending'  ;
apiReqStatus='sucess';
// apiReqStatus='done'; cant use only 'pending'|'sucess' |'error'