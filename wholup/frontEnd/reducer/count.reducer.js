export default function(Count = {} , action) {
  if(action.type == 'increase') {
      var countCopy = {...Count}
      countCopy.firstName = action.firstName
      countCopy.lastName = action.lastName
      countCopy.email = action.email
      countCopy.job = action.job
      countCopy.userId = action.userId
  return countCopy;
  } else {
    return Count;
  }
}
