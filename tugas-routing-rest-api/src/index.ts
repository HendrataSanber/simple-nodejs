import express, { Request, Response } from "express";
import path from "path";

const PORT = 3000;

let kategori = [
  { id: 1, name: 'Elektronik'},
  { id: 2, name: 'Perabotan'}
];

let produk = [
  { id: 1, name: 'Laptop', category: 'Elektronik'},
  { id: 2, name: 'Meja', category: 'Perabotan'}
];

function init() {
  const app = express();
  app.use(express.json());

  app.get('/api/category', (req, res) => {
    res.json(kategori);
  });

  app.get('/api/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = kategori.find(k => k.id === id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  app.post('/api/category', (req, res) => {
    const newdata = req.body;
    console.log(newdata);
    newdata.id = kategori.length ? kategori[kategori.length - 1].id + 1 : 1;
    kategori.push(newdata);
    res.status(201).json(newdata);
  });

  app.put('/api/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = kategori.findIndex(k => k.id === id);
    if (index !== -1) {
      kategori[index] = { id: id, ...req.body };
      res.json(kategori[index]);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });
  
  app.delete('/api/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    kategori = kategori.filter(k => k.id !== id);
    res.status(204).send();
  });

  app.get('/api/product/', (req, res) => {
    const namaproduk = req.query.name?String(req.query.name).toLowerCase():'';
    const data = produk.find(p => p.name.toLowerCase() === namaproduk);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
  });

  app.get('/api/product/:name', (req, res) => {
    const kategori = req.params.name.toLowerCase();
    const namaproduk = req.query.name?String(req.query.name).toLowerCase():'';
    const data = produk.find(p => p.name.toLowerCase() === namaproduk && p.category.toLowerCase()==kategori);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
  });

  // tugas hari ke 6
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      }
    });
  });

  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
