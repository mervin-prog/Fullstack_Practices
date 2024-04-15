document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById("calender");
    const prevMonthBtn = document.getElementById("prevMonthBtn");
    const nextMonthBtn = document.getElementById("nextMonthBtn");
    const todayBtn=document.getElementById("today");

    // Initial render
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    renderCalendar(currentMonth, currentYear);

    
    

    // Event listeners for prev/next buttons
    prevMonthBtn.addEventListener("click", function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        if (currentMonth === 11) {
            currentYear -= 1;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener("click", function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        if (currentMonth === 0) {
            currentYear += 1;
        }
        renderCalendar(currentMonth, currentYear);
    });

    // Event listener for Today button
    todayBtn.addEventListener("click", function() {
        const today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        renderCalendar(currentMonth, currentYear);
    });

    // Function to render the calendar for a specific month and year
    function renderCalendar(month, year) {
        // Clear previous calendar content
        calendarContainer.innerHTML = "";

        // Set calendar title
        const calendarTitle = document.createElement("h4");
        calendarTitle.textContent = `${getMonthName(month)} ${year}`;
        calendarContainer.appendChild(calendarTitle);

        // Create table for calendar
        const table = document.createElement("table");
        table.classList.add("table", "table-bordered");

        // Create table header with day names
        const tableHeader = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dayNames.forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            headerRow.appendChild(th);
        });
        tableHeader.appendChild(headerRow);

        // Create table body with calendar days
        const tableBody = document.createElement("tbody");
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDayOfMonth) {
                    cell.textContent = "";
                } else if (date > daysInMonth) {
                    cell.textContent = "";
                } else {
                    cell.textContent = date;
                    if (date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                        cell.classList.add("current-date"); // Add class to highlight current date
                        cell.style.backgroundColor = "#0d6efd";
                        cell.style.color = "white"; 
                        cell.style.fontWeight = "bold"; // Set font weight
                    }                    
                    date++;
                }
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        }

        table.appendChild(tableHeader);
        table.appendChild(tableBody);
        calendarContainer.appendChild(table);
    }

    // Function to get the name of the month
    function getMonthName(monthIndex) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[monthIndex];
    }
});
