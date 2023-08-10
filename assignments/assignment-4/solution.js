class Person {
    static instances = 0;

    constructor(name) {
        this.name = name;
        Person.instances++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return Person.instances;
    }
}
JAVASCRIPT;
class Student extends Person {
    static instances = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook();
        Student.instances++;
    }

    introduceYourself() {
        console.log(`${super.introduceYourself()} and I am a student`);
    }

    getGradeBook() {
        return this.gradeBook;
    }

    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return "School shirt and pants";
    }

    getRole() {
        return "Student";
    }

    static countInstances() {
        return Student.instances;
    }
}
JAVASCRIPT;
class Teacher extends Person {
    static instances = 0;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instances++;
    }

    introduceYourself() {
        console.log(`${super.introduceYourself()} and I teach ${this.subject}`);
    }

    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        return "Teacher";
    }

    static countInstances() {
        return Teacher.instances;
    }
}
JAVASCRIPT;
class GradeBook {
    constructor() {
        this.gradeBook = {};
    }

    addGrade(subject, grade) {
        if (!this.gradeBook[subject]) {
            this.gradeBook[subject] = [];
        }
        this.gradeBook[subject].push(grade);
    }

    getGrades(subject) {
        return this.gradeBook[subject] || [];
    }

    getAllGrades() {
        return this.gradeBook;
    }

    static format() {
        return "Subject: [Grades]";
    }
}
JAVASCRIPT;
class School {
    static instances = 0;

    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
        School.instances++;
    }

    enroll(student) {
        this.students.push(student);
    }

    expel(student) {
        let newStudents = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i] !== student) {
                newStudents.push(this.students[i]);
            }
        }
        this.students = newStudents;
    }

    hire(teacher) {
        this.teachers.push(teacher);
    }

    fire(teacher) {
        let newTeachers = [];
        for (let i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i] !== teacher) {
                newTeachers.push(this.teachers[i]);
            }
        }
        this.teachers = newTeachers;
    }

    getStudents() {
        return this.students;
    }

    getTeachers() {
        return this.teachers;
    }

    findStudentByName(name) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === name) {
                return this.students[i];
            }
        }
        return null;
    }

    findTeacherByName(name) {
        for (let i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].name === name) {
                return this.teachers[i];
            }
        }
        return null;
    }

    getStudentGrades(student) {
        return student.getGradeBook().getAllGrades();
    }

    getTeacherSubjects(teacher) {
        return [teacher.getSubject()];
    }

    static countInstances() {
        return School.instances;
    }
}
