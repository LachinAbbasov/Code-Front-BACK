let noticeScroll = document.querySelector(".notice-scroll");

let admission = document.querySelector("#admission");
let exam = document.querySelector("#exam");
let latest = document.querySelector("#latest");

admission.addEventListener("click", () => {
    noticeScroll.innerHTML = `
        <!-- 1 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">3</span>
                            <span class="date-month">Aug</span>
                        </div>
                        <div class="notice-parag">
                            Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances for Human
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Urgent Notice: Campus Maintenance Work Scheduled for March 5th-7th.
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">11</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances.
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">12</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Urgent Notice: Campus Maintenance Work Scheduled for March 5th-7th.
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice Regarding Upcoming Campus Event: Spring Fling Carnival.
                        </div>
                    </div>
                    <!-- 6 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice Regarding Deadline Extension for Assignment Submission in Biology 101.
                        </div>
                    </div>
    `
    admission.style.backgroundColor = "#36348E"
    admission.style.color = "#fff"

    exam.style.backgroundColor = "#fff"
    exam.style.color = "#000"
    latest.style.backgroundColor = "#fff"
    latest.style.color = "#000"
})

exam.addEventListener("click", () => {
    noticeScroll.innerHTML = `
        <!-- 1 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">3</span>
                            <span class="date-month">Aug</span>
                        </div>
                        <div class="notice-parag">
                            Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances for All
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances.
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice Regarding Upcoming Campus Event: Spring Fling Carnival.
                        </div>
                    </div>
    `
    exam.style.backgroundColor = "#36348E"
    exam.style.color = "#fff"

    admission.style.backgroundColor = "#fff"
    admission.style.color = "#000"
    latest.style.backgroundColor = "#fff"
    latest.style.color = "#000"
})

latest.addEventListener("click", () => {
    noticeScroll.innerHTML = `
        <!-- 1 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">3</span>
                            <span class="date-month">Aug</span>
                        </div>
                        <div class="notice-parag">
                            Important Notice: Changes to Examination Schedule for Fall Semester 2024 to 2026
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Important Notice: Changes to Examination Schedule for Fall Semester 2024.
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="notice-scroll-card">
                        <div class="notice-date">
                            <span class="date-number">10</span>
                            <span class="date-month">Jul</span>
                        </div>
                        <div class="notice-parag">
                            Notice Regarding Deadline Extension for Assignment Submission in Biology 101.
                        </div>
                    </div>
    `
    
    latest.style.backgroundColor = "#36348E"
    latest.style.color = "#fff"

    admission.style.backgroundColor = "#fff"
    admission.style.color = "#000"
    exam.style.backgroundColor = "#fff"
    exam.style.color = "#000"
})
// noticeScroll.scrollIntoView({ behavior: 'smooth', block: 'end' });
// noticeScroll.scroll(0, 1000);
// noticeScroll.scroll({
//     behavior: "smooth",
// })

// function scrollToBottom() {
//     noticeScroll.scrollTop = noticeScroll.scrollHeight;
// }
// scrollToBottom()