/**
 * Menu schema
 *
 * @param  {number} id
 * @param  {number} dayType  "breakfast/lunch/dinner"
 * @param  {number} menuType  "entrees, appetizers, drinks, dessserts"
 *
 *
 */

//  Ex. On our landing page we break down recommendations into menu categories
//  Popular desert menus around you

{
  id: documentId,
  dayType: String,
  menuType: String,
  menuItems: Array of menuItemDocumentId,
}
