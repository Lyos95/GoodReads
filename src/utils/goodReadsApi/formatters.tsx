export const formatDate = (day:number,month:number,year:number) => {
    let date
    if(day && month && year){
      date = `${day}/${month}/${year}`
    }else if(month && year){
      date = `??/${month}/${year}`
    }else if(year){
      date = `??/??/${year}`
    }else{
      date = 'Unknown'
    }
  
    return date
  }
  
  