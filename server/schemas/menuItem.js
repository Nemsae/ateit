/**
 * MenuItem schema
 *
 * @param  {number} id
 * @param  {number} name  "breakfast/lunch/dinner"
 * @param  {number} upvotes integer greater than 0
 * @param  {string} description
 * @param  {array} ingredients
 * @param  {number} price
 * @param  {array} photos
 * @param  {array} upvoteUsers
 *
 */

{
  id: documentId,
  name: String,
  upvotes: Integer,
  description: String,
  ingredients: Array of String,
  price: Integer,
  photos: Array of photoDocumentId,
  upvoteUsers: Array of userDocumentId,
}
