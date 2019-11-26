// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

function mostMoney(students) {
    // students are passed in as an array of student instances/objects
    // iterate through the array
    // for each student - calculate total amount sum(5 x n, 10 x n, 20 x n)
    // compare the total amount for each student and return name of student with highest amount


    let highestAmount = 0
    let name = ""

    for (i = 0; i < students.length; i++) {
        const { fives, tens, twenties } = students[i];
        students[i]['total'] = (5 * fives) + (10 * tens) + (20 * twenties);


        if (students[i].total > highestAmount) {
            highestAmount = students[i].total;
            name = students[i].name;
        } else if (students[i].total === highestAmount) {
            name = "all";
        }
    }

    return name;

}