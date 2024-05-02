document.addEventListener("DOMContentLoaded", function() {
    // Dropdown button functionality
    const dropdownBtns = document.querySelectorAll(".dropbtn");
    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("open");
            this.classList.toggle("open");
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function(event) {
        dropdownBtns.forEach(btn => {
            if (!btn.contains(event.target)) {
                btn.classList.remove("open");
                const dropdownContent = btn.nextElementSibling;
                dropdownContent.classList.remove("open");
            }
        });
    });

    // Click event on dropdown items
    const dropdownItems = document.querySelectorAll(".dropdown-content li.item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", function() {
            const dropdownBtn = this.closest(".dropdown").querySelector(".dropbtn > span");
            dropdownBtn.textContent = this.textContent;
            const dropdownContent = this.parentElement;
            dropdownContent.classList.remove("open");
            dropdownBtn.parentElement.classList.remove("open");
        });
    });

    // Submit button functionality with validation
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate required text inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const paymentDropdown = document.getElementById('paymentDropdown').querySelector('.dropbtn > span');
        const methodDropdown = document.getElementById('MethodDropdown').querySelector('.dropbtn > span');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Please fill out all required fields.');
        } else if (paymentDropdown.textContent === 'Select Mode:' || methodDropdown.textContent === 'Delivery / Pick-Up:') {
            alert('Please select an option from the dropdown menus.');
        } else {
            orderPlace(); // Proceed with order placement
        }
    });

    function orderPlace() {
        var confirmation = confirm('Are you sure?');
        if (confirmation) {
            var messageBox = document.createElement('div');
            messageBox.classList.add('message-box');
            messageBox.innerHTML = `
                <p>Order Placed.</p>
                <button id="okBtn">Order Again</button>
            `;
            document.body.appendChild(messageBox);
            document.getElementById('okBtn').addEventListener('click', function() {
                window.location.href = 'orderpage.html';
            });
        }
    }

    // Cancel button functionality
    document.getElementById('cancelBtn').addEventListener('click', cancelOrder);
    function cancelOrder() {
        var confirmation = confirm('Are you sure you want to cancel your order?');
        if (confirmation) {
            var messageBox = document.createElement('div');
            messageBox.classList.add('message-box');
            messageBox.innerHTML = `
                <p>Order cancelled.</p>
                <button id="goBackBtn">Go back to main page</button>
            `;
            document.body.appendChild(messageBox);
            document.getElementById('goBackBtn').addEventListener('click', function() {
                window.location.href = 'http://127.0.0.1:5500/index.html';
            });
        }
    }
});