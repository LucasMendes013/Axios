const promessa = new Promise((resolve, reject) => {
  let a = 1 + 1
  if(a === 2){
    resolve('Sucess')
  }else {
    reject('Failded')
  }
})

promessa.then((message) => {
  console.log('This is  a success message ' + message ) 
}).catch((err) => {
  console.log('This is the catch '+ err)
})