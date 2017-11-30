'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: create database model

//Students have ID, SeatNumber, Name
var Student = new Schema({
   name: {
     type:String,
     required: true
   }
   studentID: {
     type: Number,
   }
   seatNumber: {
     type: Number,
   }
})

//Each room contains a list of students
var Room = new Schema({
  roomNumber: {
    type: Number,
  }
  students: [Student]
})

//Database contains list of rooms and students
var Database = new Schema({
  rooms: [Room]
  students: [Student]
})

module.exports = mongoose.model('Database', Database);
