class PhoneBookView {
	constructor(book) {
		let personsRow = document.getElementById('personsRow');

		for (let phone in book.contactList) {

			// getting sets
			let contact = book.contactList[phone];
			// getting contact info
			let firstName = contact.firstName;
			let secondName = contact.secondName;

			// tags prepearing
			let colDiv = document.createElement('div');
			colDiv.className = 'col-md-3';
			let thumbnailDiv = document.createElement('div');
			thumbnailDiv.className = 'thumbnail';

			//создаем массив для хранения содержимого thumbnailDiv'а
			let thumbnailChailds = [];

			//создаем эдементы thumbnail'а и заносим их в массив thumbnailChailds
			//may be I shuld make class or method fos this operations?
			let imgPlace = document.createElement('img');
			imgPlace.src = 'http://via.placeholder.com/350x150';
			thumbnailChailds.push(imgPlace);

			let captionDiv = document.createElement('div');
			captionDiv.className = 'caption';
			thumbnailChailds.push(captionDiv);

			let thumbnailLabel = document.createElement('h3');
			thumbnailLabel.innerHTML = firstName + ' ' + secondName;
			thumbnailChailds.push(thumbnailLabel);

			let phoneField = document.createElement('span');
			phoneField.innerHTML = 'Phone number: ' + phone;
			thumbnailChailds.push(phoneField);

			let btnParagraph = document.createElement('p');
			thumbnailChailds.push(btnParagraph);

			//creation of the primaty btn
			let btnPrimaryA = document.createElement('a');
			btnPrimaryA.className = 'btn btn-primary';
			btnPrimaryA.role = 'button';
			btnPrimaryA.href = '#';
			btnPrimaryA.innerHTML = 'Primaty btn';

			//creation of the default btn
			let btnDefaultA = document.createElement('a');
			btnDefaultA.className = 'btn btn-default';
			btnDefaultA.role = 'button';
			btnDefaultA.href = '#';
			btnDefaultA.innerHTML = 'Default btn';

			//create space span
			let spaceSpan = document.createElement('span');
			spaceSpan.innerHTML = ' ';

			// add elements to html body. thumbnail elements will add via for loop
			personsRow.appendChild(colDiv);
			colDiv.appendChild(thumbnailDiv);
			btnParagraph.appendChild(btnPrimaryA);
			btnParagraph.appendChild(spaceSpan);
			btnParagraph.appendChild(btnDefaultA);

			for (let i = 0; i < thumbnailChailds.length; i++) {
			  thumbnailDiv.appendChild(thumbnailChailds[i]);
			}
		}
	}
}
