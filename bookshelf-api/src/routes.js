const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
  } = require('./handler');
  
  const routes = [
    // Menambahkan Buku (POST)
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler
    },
    
    // Menampilkan Semua Buku (GET)
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooksHandler
    },
  
    // Menampilkan Detail Buku Berdasarkan ID (GET)
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookByIdHandler
    },
  
    // Mengubah Data Buku Berdasarkan ID (PUT)
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdHandler
    },
  
    // Menghapus Buku Berdasarkan ID (DELETE)
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler
    }
  ];
  
  module.exports = routes;
  