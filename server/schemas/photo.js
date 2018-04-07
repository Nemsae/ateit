/**
 * Photo schema
 *
 * @param  {string} id
 * @param  {string} author
 * @param  {string} restauarant
 * @param  {number} upvotes
 * @param  {array} upvoteUsers
 * @param  {bool} censorFlag
 *
 *
 */

//  Ex. On our landing page we break down recommendations into menu categories
//  Popular desert menus around you

{
  id: documentId,
  author: userDocumentId,
  restauarant: restauarantDocumentId,
  upvotes: Integer,
  upvoteUsers: Array of userDocumentId,
  censorFlag: Boolean || false,
}
