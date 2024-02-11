// routes.js

// const express = require('express');
import express from "express";
const router = express.Router();
import mysql from 'mysql2/promise';

let mysqlPool;

async function connectToMySQL() {
  try {
    mysqlPool = mysql.createPool({
        connectionLimit: 20,
        host: 'aws.connect.psdb.cloud',
        user: '4379fr675zq6cdvn1utz',
        password: 'pscale_pw_6BBUvWpBeGmMAz3Hrj66eKcEeLbAbJmZVUXbvKYb6t6',
        database: 'political',
        ssl: {
          rejectUnauthorized: true
        }
    });
    console.log('Connected to MySQL');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
}

async function checkMySQLConnection(req, res, next) {
  try {
    if (!mysqlPool) {
      await connectToMySQL();
    } else {
      // Ping MySQL to check if connection is still alive
      await mysqlPool.query('SELECT 1');
    }
    next();
  } catch (error) {
    console.error('Error checking MySQL connection:', error);
    throw error;
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}

// GET all users
router.get('/api/v1/getallcourse', checkMySQLConnection, async (req, res) => {
  try {
    const [rows] = await mysqlPool.query('SELECT * FROM course');
    // res.json(rows);
    res.status(201).json({ status: "success", data: rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.status(201).json({ massage: error });
  }
});

// POST a new user
router.post('/api/v1/allcourse/insert', checkMySQLConnection, async (req, res) => {
  const { name, email } = req.body;
  try {
    await mysqlPool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    // res.status(201).json({ message: 'User created successfully' });
    res.status(201).json({ status:"success",message:"Course created successfully" });
  } catch (error) {
    console.error('Error creating user:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.status(201).json({ massage: error });
  }
});

// GET single user by ID
router.get('/api/v1/allcourse/:id', checkMySQLConnection, async (req, res) => {
  const userId = req.params.id;
  try {
    const [rows] = await mysqlPool.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    //   res.status(201).json({ status: "success", data: rows });
    }
    // res.json(rows[0]);
    res.status(201).json({ status: "success", data: rows[0] });
  } catch (error) {
    console.error('Error fetching user:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.status(201).json({ massage: error });
  }
});

// DELETE a user by ID
router.delete('/api/allcourse/delete/:id', checkMySQLConnection, async (req, res) => {
  const userId = req.params.id;
  try {
    await mysqlPool.query('DELETE FROM users WHERE id = ?', [userId]);
    // res.json({ message: 'User deleted successfully' });
    res.status(201).json({ status: "success", message: 'Course deleted successfully'  });
  } catch (error) {
    console.error('Error deleting user:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.status(201).json({ massage: error });
  }
});

// module.exports = router;
export default router
