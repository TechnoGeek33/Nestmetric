
export var increaseProgressBar = (numberofPages , pageCount) => {
      return `${ (100 /numberofPages) * pageCount }%` ;
}