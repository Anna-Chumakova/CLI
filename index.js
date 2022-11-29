const contacts = require("./contacts");

const invokenAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const getContact = await contacts.getContactById(id);
            console.log(getContact);
            break;
        case "add":
            const newContact = await contacts.addContact(name, email, phone );
            console.log(newContact);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
        
    }
}

//invokenAction({ action: "list"});
//invokenAction({ action: "get", id: "3"});
invokenAction({ action: "add", name: "Anna Chumakova", email: "ann020187@gmail.com", phone: "(111) 111-1111" });