// render() {
//     const { contacts, filter } = this.state;
//     const filteredList = this.getFilteredList();
//     return (
//       <Box>
//         <Toaster />
//         <h1>Phonebook</h1>
//         <ContactForm contacts={contacts} onFormSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.applyFilter} />
//         {filteredList.length > 0 && (
//           <ContactList listContacts={filteredList} handleCLick={this.deleteContact} />
//         )}
//         {filter && filteredList.length === 0 && (
//           <NotFound>No results found for "{filter}".</NotFound>
//         )}
//       </Box>
//     );
//   }
// }
