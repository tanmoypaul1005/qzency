export function formatDate(dateString) {
    if(dateString){
    const options = {  day: 'numeric', month: 'long',year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
    }else{
        return "-- --";
    }
  }

  export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };