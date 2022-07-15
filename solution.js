function findSum(num,target){

  //returns an empty array for an empty input

  if (num==undefined ||num.length==0) {

    console.log([])

  }

  else{

    for(let i=0;i<num.length;i++){

      num.map((value)=>{

        if(num[i]+value==target){

          console.log([num[i],value])

        }

      })

      //breaks for loop immediately after getting first single solution instead of running through all the array, i did this to manage system resource and memory.

      break;

    }

  }

}

findSum([2,11,7,15],9)

