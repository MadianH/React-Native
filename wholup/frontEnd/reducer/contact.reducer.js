export default function(ContactList=[], action ){
  if (action.type == "addcontact") {

      var ContactListCopy = [...ContactList];
      console.log('reducer', ContactListCopy);
      var contact = {firstName: action.firstName, lastName: action.lastName, email: action.email, job: action.job, userId: action.userId}
      ContactListCopy.push(contact)

    return ContactListCopy;
    ContactListCopy = []
    console.log('reducerfinal', ContactListCopy);
  }else{
    return ContactList;
  }
}
