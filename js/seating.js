// Get the selected seats section and the seats list element
const selectedSeatsSection = document.querySelector('.seatsSummary');
const seatsList = selectedSeatsSection.querySelector('ul');
const seatCounter = document.querySelector('#totalSeats');
const priceCounter = document.querySelector('#totalPrice');
let price = 6.99;
const MAX_SEATS = 6;
let selectedSeats = [];


const seats = document.querySelectorAll('.seat');


seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('available')) {
      if (selectedSeats.length < MAX_SEATS) {
        seat.classList.toggle('selected');
        seat.classList.remove('available');
        selectedSeats.push(seat.dataset.row + seat.dataset.column);
        updateTotals();
        // Add the seat number to the selected seats section
        const seatListItem = document.createElement('li');
        seatListItem.dataset.seat = seat.dataset.row + seat.dataset.column;
        seatListItem.innerText = `${seat.dataset.row}${seat.dataset.column}`;
        seatsList.appendChild(seatListItem);
      } else {
        alert(`Solo puede seleccionar un maximos de ${MAX_SEATS} asientos.`);
      }    

    } else if (seat.classList.contains('selected')) {
      seat.classList.toggle('selected');
      seat.classList.add('available');
      // Remove the seat number from the selectedSeats array
      selectedSeats = selectedSeats.filter(seatNum => seatNum !== seat.dataset.row + seat.dataset.column);
      //call TotalPrice & TotalSeats
      updateTotals();

      // Remove the seat number from the selected seats section
      const seatListItem = seatsList.querySelector(`li[data-seat="${seat.dataset.row}${seat.dataset.column}"]`);
      seatListItem.remove();
    }
  });
});

function updateTotals() {
  // Update the total seats and total price paragraphs
  const numSeats = selectedSeats.length;
  const total = price * numSeats;
  totalSeats.innerText = `${numSeats}`;
  totalPrice.innerText = `${total.toFixed(2)} €`; //just 2 decimal places
}