document.addEventListener('DOMContentLoaded', () => {
    fetch('/users')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#usersTable tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
