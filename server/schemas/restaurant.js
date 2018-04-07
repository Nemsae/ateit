/**
 * Restauarant schema
 *
 * @param  {number} id
 * @param  {string} name
 * @param  {string} email
 * @param  {string} address
 * @param  {number} priceLevel
 * @param  {array} menus
 *
 *
 */

{
  id: documentId,
  name: String,
  email: String,
  address: String,
  phoneNumber: String,
  priceLevel: Integer,
  menus: Array of menuDocuemntId,
}
