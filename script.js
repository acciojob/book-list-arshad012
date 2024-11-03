//your JS code here. If required.
document.querySelector('.form-group').addEventListener('submit', (e) => {
	e.preventDefault();
	const book_list = document.getElementById('book-list');

	const form = document.querySelector('.form-group');
	const name = form.title.value;
	const author = form.author.value;
	const isbn = form.isbn.value;

	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	td1.innerText = name;
	const td2 = document.createElement('td');
	td2.innerText = author;
	const td3 = document.createElement('td');
	td3.innerText = isbn;
	td3.className = 'delete';
	td3.onclick = () => {
		td3.parentNode.remove();
	}
	// const td4 = document.createElement('td');
	// td4.innerText = 'delete';
	// td4.className = 'delete';
	// td4.onclick = () => {
	// 	td4.parentNode.remove();
	// }
	
	tr.append(td1, td2, td3);

	book_list.append(tr);
});

