const wagaInput = document.getElementById('waga');
const plecSelect = document.getElementById('plec');
const iloscInput = document.getElementById('ilosc-piw');
const procentInput = document.getElementById('procent-alkoholu');
const obliczBtn = document.getElementById('oblicz-btn');
const wynikP = document.getElementById('wynik');

obliczBtn.addEventListener('click', obliczBAC);

function obliczBAC() {
    const waga = parseFloat(wagaInput.value);
    const plec = plecSelect.value;
    const ilosc = parseFloat(iloscInput.value);
    const procent = parseFloat(procentInput.value) / 100;
    const r = plec === 'ale'? 0.68 : 0.55;
    const alcoholGrams = ilosc * 0.33 * procent;
    const bac = (alcoholGrams / (waga * r)) * 1000;
    const bacPromil = (bac / 10).toFixed(2);
    alert(`Jesteś pijany, masz w sobie: ${bacPromil} promili`);
    if (waga > 0 && iloscPiw > 0 && procentAlkoholu > 0) {
      // doen die berekening hier
    } else {
      alert(`Jesteś trzeźwy masz: 0 promili`);
    }
  }