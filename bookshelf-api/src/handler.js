const { nanoid } = require('nanoid');
const books = require('./books');

// 1. Menambahkan Buku
const addBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  // Validasi bahwa name wajib diisi
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    }).code(400);
  }

  // Validasi bahwa readPage tidak boleh lebih besar dari pageCount
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400);
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt
  };

  books.push(newBook);

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: { bookId: id }
  }).code(201);
};

// 2. Menampilkan Semua Buku
const getAllBooksHandler = (request, h) => {
  // Buat array baru yang hanya berisi properti yang diperlukan
  const simpleBooks = books.map(book => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return h.response({
    status: 'success',
    data: { books: simpleBooks },
  }).code(200);
};

// 3. Menampilkan Detail Buku Berdasarkan ID
const getBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const book = books.find(b => b.id === id);

  if (book) {
    return {
      status: 'success',
      data: { book }
    };
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  }).code(404);
};

// 4. Mengubah Data Buku
const editBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const updatedAt = new Date().toISOString();

  // Validasi bahwa name wajib diisi
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku'
    }).code(400);
  }

  // Validasi bahwa readPage tidak boleh lebih besar dari pageCount
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400);
  }

  const index = books.findIndex(b => b.id === id);
  
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name, year, author, summary, publisher, pageCount, readPage, reading, updatedAt,
      finished: pageCount === readPage
    };

    return {
      status: 'success',
      message: 'Buku berhasil diperbarui'
    };
  }

  return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  }).code(404);
};

// 5. Menghapus Buku
const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = books.findIndex(b => b.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    return {
      status: 'success',
      message: 'Buku berhasil dihapus'
    };
  }

  return h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  }).code(404);
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
};
