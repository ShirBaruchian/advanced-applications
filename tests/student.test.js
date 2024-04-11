const request = require("supertest");
const init = require("../app.js");
const mongoose = require("mongoose")
const Student = require("../models/student_model")

const testStudent = {
    _id: "12345",
    name: "John Doe",
    age: 25
}

let app;

beforeAll(async() => {
    app = await init();
    await Student.deleteMany();
})

afterAll(async () => {
    await mongoose.connection.close();
})

describe("Student Tests", () => {
    test("Test student get", async () => {
        const response = await request(app).get("/student");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual([]);
    });
    // test student post
    test("Test student post", async () => {
        const response = await request(app)
            .post("/student")
            .send(testStudent);
        expect(response.statusCode).toEqual(201);
        expect(response.body._id).toEqual(testStudent._id);
        expect(response.body.name).toEqual(testStudent.name);
        expect(response.body.age).toEqual(testStudent.age);
    });
    //test the get student by id
    test("Test student get by id", async () => {
        const response = await request(app).get("/student/12345");
        expect(response.statusCode).toEqual(200);
        expect(response.body._id).toEqual(testStudent._id);
        expect(response.body.name).toEqual(testStudent.name);
        expect(response.body.age).toEqual(testStudent.age);
    });
    
    test("Test 2", async () => {
        
    });
})