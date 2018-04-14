/**
 * User schema
 *
 * @param  {number} id
 * @param  {string} username
 * @param  {string} name
 * @param  {string} email
 * @param  {string} phoneNumber
 * @param  {string} password
 * @param  {number} points
 * @param  {array} photos
 * @param  {array} friends
 *
 */

{
  id: documentId,
  username: String,
  name: String,
  email: String,
  phoneNumber: String,
  password: String,   //  Salted hashed password
  points: Integer,
  photos: Array of photoDocumentId,
  friends: Array of userDocumentId,
}
