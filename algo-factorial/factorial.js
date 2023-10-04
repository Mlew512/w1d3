function factorial(num) {
    let total=1
    if (num==0){
        return 1;
  }else if(num>0){
    for(i=1;i<num+1;i++){
        total*=i
    }
  }
  return BigInt(total)
}
module.exports = factorial
