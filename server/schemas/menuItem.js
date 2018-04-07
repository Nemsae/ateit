/**
 * menuItem schema
 *
 * @param  {number} id
 * @param  {number} name  "breakfast/lunch/dinner"
 * @param  {number} upvotes integer greater than 0
 * @param  {string} description integer greater than 0
 * @param  {array} ingredients integer greater than 0
 * @param  {number} price integer greater than 0
 * @param  {array} photos integer greater than 0
 * @param  {array} upvoteUsers integer greater than 0
 *
 *
 */

//  Ex. On our landing page we break down recommendations into menu categories
//  Popular desert menus around you

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
