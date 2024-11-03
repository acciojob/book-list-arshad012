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
	const button = document.createElement('button');
	button.innerText = 'delete';
	button.style.marginLeft = '50px';
	button.className = 'delete';
	button.onclick = () => {
		td3.parentNode.remove();
	}
	td3.append(button);
	// const td4 = document.createElement('td');
	
	tr.append(td1, td2, td3);

	book_list.append(tr);
});

