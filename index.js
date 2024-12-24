
var donationHistory = [];
console.log(donationHistory);

document.getElementById('history').addEventListener('click', function () {
    document.getElementById('donation-place').classList.add('hidden');
    document.getElementById('history-place').classList.remove('hidden');
    document.getElementById('history').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('bg-gray-200');
    document.getElementById('donate').classList.remove('bg-[#B4F461]');
    document.getElementById('donate').classList.add('bg-gray-200');
    updateHistory();
})
document.getElementById('donate').addEventListener('click', function () {
    document.getElementById('donation-place').classList.remove('hidden');
    document.getElementById('history-place').classList.add('hidden');
    document.getElementById('donate').classList.add('bg-[#B4F461]');
    document.getElementById('donate').classList.remove('bg-gray-200');
    document.getElementById('history').classList.remove('bg-[#B4F461]');
});

function donate(param) {
    const amount = parseInt(document.getElementById(`${param}-amount`).value);
    const balance = parseInt(document.getElementById(`${param}-balance`).innerText);
    const totalBalance = parseInt(document.getElementById('total-balance').innerText);
    if (totalBalance >= amount) {
        const totalAmount = amount + balance;
        document.getElementById(`${param}-balance`).innerText = totalAmount;
        document.getElementById(`${param}-amount`).value = '';
        const id = document.getElementById(`${param}-project`).innerText;
        const newTotalBalance = totalBalance - amount;
        document.getElementById('total-balance').innerText = newTotalBalance;
        const donateHistory = {
            amount: amount,
            date: new Date().toLocaleString(),
            description: id
        }
        my_modal_1.showModal();
        donationHistory.push(donateHistory);
    }
}


document.getElementById('noakhali').addEventListener('click', function () {
    donate('noakhali');
})
document.getElementById('feni').addEventListener('click', function () {
    donate('feni');
})
document.getElementById('quota').addEventListener('click', function () {
    donate('quota');
})

function updateHistory() {
    const parent = document.getElementById('history-place');
    parent.innerHTML = ''; // Clear previous content
    donationHistory.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('2xl:p-8', 'xl:p-7', 'border', 'border-gray-400', 'rounded-lg', 'border-opacity-35');
        div.innerHTML = `
            <h1 class="2xl:text-3xl xl:text-2xl font-semibold">${element.amount} Taka is Donated for ${element.description}, Bangladesh</h1>
            <p class="text-[#585858] mt-4">Date : ${element.date}</p>
        `;
        parent.appendChild(div);
    });
}