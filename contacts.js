const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname,"./db", "contacts.json");
 

// TODO: задокументировать каждую функцию
const listContacts = async() => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data); 
}

const getContactById = async(contactId) => {
    const data = await listContacts();
    const result = data.find(item => item.id === contactId);

    return result || null;
}

function removeContact(contactId) {
  // ...твой код
}

const addContact =async(name, email, phone) =>  {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    }
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}