const students = [
    { name: "Tony", marks: 99 },
    { name: "Natasha", marks: 92 },
    { name: "Steve", marks: 98 },
    { name: "Wanda", marks: 93 },
    { name: "Thor", marks: 95 },
    { name: "Peter", marks: 95 },
    { name: "Clint", marks: 85 },
    { name: "Bruce", marks: 90 },
    { name: "Hogan", marks: 80 },
    { name: "Wade", marks: 91 },
    { name: "Thanos", marks: 100 }
];

function renderTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td class="marks">${student.marks}</td>
        `;
        tableBody.appendChild(row) 
    });
}
renderTable(students);

document.getElementById('search').addEventListener('input', function(){
    const query = this.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(query)
    );
    renderTable(filteredStudents);
});

let ascending = true;
document.getElementById('sort').addEventListener('click', function() {
    const sortedStudents = [...students].sort((a,b) =>
        ascending ? a.marks - b.marks : b.marks - a.marks
    );
    ascending = !ascending;
    renderTable(sortedStudents);
});