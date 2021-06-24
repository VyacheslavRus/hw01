// contacts.js

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    error.message;
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const contact = result.find(({ id }) => id === contactId);
    console.table(contact);
  } catch (error) {
    error.message;
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const contact = result.filter(({ id }) => id !== contactId);
    console.table(contact);
  } catch (error) {
    error.message;
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    result.push({
      id: result.length + 1,
      name: name,
      email: email,
      phone: phone,
    });
    console.table(result);
  } catch (error) {
    error.message;
  }
}
