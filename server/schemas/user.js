//  User schema

{
  id: documentId,
  username: String,
  name: String,
  email: String,
  phoneNumber: String,
  pass: String,   //  Salted hashed password
  points: Integer,
  photos: Array of photoDocumentId,
  friends: Array of userDocumentId,
}
